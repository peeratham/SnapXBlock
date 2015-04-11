__author__ = 'Peeratham'

import pkg_resources
import urllib


from xblock.core import XBlock
from xblock.fields import Scope, Integer, String
from xblock.fragment import Fragment


class SnapXBlock(XBlock):
    """
    An XBlock for Snap!
    """
    #all customization for SnapXblock instance

    maxwidth = Integer(help="Maximum width of the video", default=800, scope=Scope.content)
    maxheight = Integer(help="Maximum height of the video", default=600, scope=Scope.content)

    #tracking
    last_grabbed = String(
        display_name="Previously Grabbed Block",
        help="JSON payload regarding how the student has interacted witht the problem",
        scope=Scope.user_state,
        default="None"
    )

    #script to display
    script_str = pkg_resources.resource_string(__name__, "static/data/counter.xml")
    # assert(script_str==False)
    script_data = String(
        display_name="Script",
        help="Script contents to display for this module",
        scope=Scope.content,
        default=urllib.quote(script_str)
        )
    # '<script><block s="forward"><l>10</l></block><block s="doDeclareVariables"><list><l>a</l></list></block><block s="doDeclareVariables"><list><l>b</l></list></block><block s="doRepeat"><l>10</l><script><block s="doDeclareVariables"><list><l>c</l></list></block><block s="doDeclareVariables"><list><l>d</l></list></block></script></block><block s="doForever"><script><block s="doDeclareVariables"><list><l id="1">e</l></list></block></script></block></script>'



    def student_view(self, context):
          # Load the HTML fragment from within the package and fill in the template
        html_str = pkg_resources.resource_string(__name__, "static/html/snap.html")

        frag = Fragment(unicode(html_str).format(self=self))
        #add all snap js

        frag.add_javascript(self.load_resource("static/js/morphic.js"))
        frag.add_javascript(self.load_resource("static/js/widgets.js"))
        frag.add_javascript(self.load_resource("static/js/blocks.js"))
        frag.add_javascript(self.load_resource("static/js/threads.js"))
        frag.add_javascript(self.load_resource("static/js/objects.js"))
        frag.add_javascript(self.load_resource("static/js/gui.js"))
        frag.add_javascript(self.load_resource("static/js/paint.js"))
        frag.add_javascript(self.load_resource("static/js/lists.js"))
        frag.add_javascript(self.load_resource("static/js/byob.js"))
        frag.add_javascript(self.load_resource("static/js/xml.js"))
        frag.add_javascript(self.load_resource("static/js/store.js"))
        frag.add_javascript(self.load_resource("static/js/locale.js"))
        frag.add_javascript(self.load_resource("static/js/cloud.js"))
        frag.add_javascript(self.load_resource("static/js/sha512.js"))
        frag.add_javascript(self.load_resource("static/js/customize_pane.js"))
        frag.add_javascript(self.load_resource("static/js/snapxblock.js"))

        frag.initialize_js('SnapXBlock',)


        return frag

    def load_resource(self, resource_path):
        """
        Gets the content of a resource
        """
        resource_content = pkg_resources.resource_string(__name__, resource_path)
        return unicode(resource_content, "utf-8", errors="ignore")

    @staticmethod
    def workbench_scenarios():
        """A canned scenario for display in the workbench."""
        return [
            ("Snap! XBlock",
            """
            <vertical_demo>
                <snap maxwidth="1000" />
            </vertical_demo>
            """)
        ]




    @XBlock.json_handler
    def mark_as_watched(self, data, suffix=''):
        """
        Called upon completion of the video.
        """

        self.last_grabbed = data.get('last_grabbed')

        return {'last_grabbed': self.last_grabbed}