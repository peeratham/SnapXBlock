function SnapXBlock(runtime, element){
    last_grabbed_status = $('.snap .status .snap-block-selector');
    encoded_script_content = $('.snap .script-content');




    window.onload = function () {
        world = new WorldMorph(document.getElementById('world'),false);
        world.worldCanvas.focus();
        ide = new IDE_Morph();
		ide.openIn(world);


		/*load individual script*/
//		model = ide.serializer.parse(script_content);
//        loadedScript = ide.serializer.loadScript(model);
//        scripts = ide.currentSprite.scripts;
//        scripts.add(loadedScript);
//        loadedScript.fixLayout();
//        loadedScript.setPosition(this.topBlock().topRight().add(new Point(30, 0)));
//        scripts.cleanUp();
        //load project
        raw_script = encoded_script_content[0].textContent;
        ide.openProjectString(decodeURIComponent(raw_script));
        ide.customMode();


		/******************/
        setInterval(loop, 1);
    };

    function loop() {
        world.doOneCycle();
    }

    function on_finish(selector) {
        $.ajax({
            type: "POST",
            url: runtime.handlerUrl(element, 'mark_as_watched'),
            data: JSON.stringify({last_grabbed: selector}),
            success: function(result) {
                last_grabbed_status.text(result.last_grabbed);
            }
        });
    }

    HandMorph.prototype.grab = function (aMorph) {
    var oldParent = aMorph.parent;
    if (aMorph instanceof WorldMorph) {
        return null;
    }
    if (this.children.length === 0) {
        this.world.stopEditing();
        this.grabOrigin = aMorph.situation();
        aMorph.addShadow();
        if (aMorph.prepareToBeGrabbed) {
            aMorph.prepareToBeGrabbed(this);
        }
        this.add(aMorph);
        this.changed();
        if (oldParent && oldParent.reactToGrabOf) {
            oldParent.reactToGrabOf(aMorph);
        }
    }
    on_finish(aMorph.selector);
};


}



