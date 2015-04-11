// customize IDE
IDE_Morph.prototype.buildPanes = function () {
    this.createLogo();
    this.createControlBar();
    this.createCategories();
    this.createPalette();
    this.createStage();
    this.createSpriteBar();
    this.createSpriteEditor();
    this.createCorralBar();
    this.createCorral();
};




IDE_Morph.prototype.customMode = function(){
    this.isAppMode = false;
    elements = [
            this.logo,
            this.controlBar.cloudButton,
            this.controlBar.projectButton,
            this.controlBar.settingsButton,
            this.controlBar.stageSizeButton,
            ide.controlBar.appModeButton,

            this.corral,
            this.corralBar,
            // this.spriteEditor,
            this.spriteBar,
            // this.palette,
            // this.categories,
            // this.stage
        ];
    elements.forEach(function (e) {
        e.hide();
    });

    // editor.setExtent(new Point(500,500));
    // editor.fixLayout();

    // this.spriteEditor.setWidth(this.world().extent().x);
    // this.spriteEditor.setHeight(this.world().extent().y);
    // this.spriteEditor.setPosition(this.palette.topLeft());
    // this.spriteEditor.setPosition(this.spriteBar.bottomLeft());
    // this.spriteEditor.setExtent(new Point(
    //     this.spriteBar.width(),
    //     this.bottom() - this.spriteEditor.top()
    // ));

    // // scratch
    world.useFillPage = false
    ide.spriteEditor.setTop(ide.controlBar.height())
    ide.spriteEditor.setExtent(new Point(500,400))
    ide.stage.setExtent(new Point(500,400))

    ide.stage.setPosition(ide.spriteEditor.bottomLeft())

    //three buttons
    ide.controlBar.stopButton.setRight(ide.spriteEditor.right())
    ide.controlBar.pauseButton.setRight(ide.controlBar.stopButton.left())
    ide.controlBar.startButton.setRight(ide.controlBar.pauseButton.left())
}



//IDE_Morph.prototype.toggleAppMode = function (appMode) {
//        //adapted from toggleAppMode
//    elements = [
//            // this.logo,
//            this.controlBar.cloudButton,
//            this.controlBar.projectButton,
//            this.controlBar.settingsButton,
//            this.controlBar.stageSizeButton,
//            this.corral,
//            this.corralBar,
//            // this.spriteEditor,
//            this.spriteBar,
//            this.palette,
//            this.categories,
//            this.stage
//        ];
//    elements.forEach(function (e) {
//        e.hide();
//    });
//
//    // console.log(this.world().extent());
//    // this.setExtent(this.world().extent()); // resume trackChanges
//    point = this.world().extent();
//    // minExt = StageMorph.prototype.dimensions.add(
//    //         this.controlBar.height() + 10
//    //     );
//    // ext = point.max(minExt);
//    editor = this.spriteEditor;
//   // this.spriteEditor.setWidth(this.world().extent().x);
//   // this.spriteEditor.setHeight(this.world().extent().y);
//   // this.spriteEditor.setPosition(this.palette.topLeft());
//
//
//    // IDE_Morph.uber.setExtent.call(this, point);
//    // this.fixLayout();
//
//    // need to work on when resize
//}



// IDE_Morph.prototype.fixLayout = function (situation) {
//     // situation is a string, i.e.
//     // 'selectSprite' or 'refreshPalette' or 'tabEditor'
//     var padding = this.padding;

//     Morph.prototype.trackChanges = false;

//     if (situation !== 'refreshPalette') {
//         // controlBar
//         this.controlBar.setPosition(this.logo.topRight());
//         this.controlBar.setWidth(this.right() - this.controlBar.left());
//         this.controlBar.fixLayout();

//         // categories
//         this.categories.setLeft(this.logo.left());
//         this.categories.setTop(this.logo.bottom());
//     }

//     // palette
//     this.palette.setLeft(this.logo.left());
//     this.palette.setTop(this.categories.bottom());
//     this.palette.setHeight(this.bottom() - this.palette.top());

//     if (situation !== 'refreshPalette') {
//         // stage
//         if (this.isAppMode) {
//             this.stage.setScale(Math.floor(Math.min(
//                 (this.width() - padding * 2) / this.stage.dimensions.x,
//                 (this.height() - this.controlBar.height() * 2 - padding * 2)
//                     / this.stage.dimensions.y
//             ) * 10) / 10);
//             this.stage.setCenter(this.center());
//         } else {
// //            this.stage.setScale(this.isSmallStage ? 0.5 : 1);
//             this.stage.setScale(this.isSmallStage ? this.stageRatio : 1);
//             this.stage.setTop(this.logo.bottom() + padding);
//             this.stage.setRight(this.right());
//         }

//         // spriteBar
//         this.spriteBar.setPosition(this.logo.bottomRight().add(padding));
//         this.spriteBar.setExtent(new Point(
//             Math.max(0, this.stage.left() - padding - this.spriteBar.left()),
//             this.categories.bottom() - this.spriteBar.top() - padding
//         ));
//         this.spriteBar.fixLayout();

//         // spriteEditor
//         if (this.spriteEditor.isVisible) {
//             this.spriteEditor.setPosition(this.spriteBar.bottomLeft());
//             this.spriteEditor.setExtent(new Point(
//                 this.spriteBar.width(),
//                 this.bottom() - this.spriteEditor.top()
//             ));
//         }

//         // corralBar
//         this.corralBar.setLeft(this.stage.left());
//         this.corralBar.setTop(this.stage.bottom() + padding);
//         this.corralBar.setWidth(this.stage.width());

//         // corral
//         if (!contains(['selectSprite', 'tabEditor'], situation)) {
//             this.corral.setPosition(this.corralBar.bottomLeft());
//             this.corral.setWidth(this.stage.width());
//             this.corral.setHeight(this.bottom() - this.corral.top());
//             this.corral.fixLayout();
//         }
//     }

//     Morph.prototype.trackChanges = true;
//     this.changed();
// };

// SpriteMorph.prototype.categories =
//     [
//         'motion',
//         // 'control',
//         // 'looks',
//         // 'sensing',
//         // 'sound',
//         // 'operators',
//         // 'pen',
//         // 'variables',
//         // 'lists',
//         // 'other'
//     ];

// // IDE_Morph.prototype.createCategories = function () {
// //     // assumes the logo has already been created 
// //     var myself = this;

// //     if (this.categories) {
// //         this.categories.destroy();
// //     }
// //     this.categories = new Morph();
// //     this.categories.color = this.groupColor;
// //     this.categories.silentSetWidth(this.logo.width()); // width is fixed

// //     // function addCategoryButton(category) {
// //     //     var labelWidth = 75,
// //     //         colors = [
// //     //             myself.frameColor,
// //     //             myself.frameColor.darker(50),
// //     //             SpriteMorph.prototype.blockColor[category]
// //     //         ],
// //     //         button;

// //     //     button = new ToggleButtonMorph(
// //     //         colors,
// //     //         myself, // the IDE is the target
// //     //         function () {
// //     //             myself.currentCategory = category;
// //     //             myself.categories.children.forEach(function (each) {
// //     //                 each.refresh();
// //     //             });
// //     //             myself.refreshPalette(true);
// //     //         },
// //     //         category[0].toUpperCase().concat(category.slice(1)), // label
// //     //         function () {  // query
// //     //             return myself.currentCategory === category;
// //     //         },
// //     //         null, // env
// //     //         null, // hint
// //     //         null, // template cache
// //     //         labelWidth, // minWidth
// //     //         true // has preview
// //     //     );

// //     //     button.corner = 8;
// //     //     button.padding = 0;
// //     //     button.labelShadowOffset = new Point(-1, -1);
// //     //     button.labelShadowColor = colors[1];
// //     //     button.labelColor = myself.buttonLabelColor;
// //     //     button.fixLayout();
// //     //     button.refresh();
// //     //     myself.categories.add(button);
// //     //     return button;
// //     // }

// //     // function fixCategoriesLayout() {
// //     //     var buttonWidth = myself.categories.children[0].width(),
// //     //         buttonHeight = myself.categories.children[0].height(),
// //     //         border = 3,
// //     //         rows =  Math.ceil((myself.categories.children.length) / 2),
// //     //         xPadding = (myself.categories.width()
// //     //             - border
// //     //             - buttonWidth * 2) / 3,
// //     //         yPadding = 2,
// //     //         l = myself.categories.left(),
// //     //         t = myself.categories.top(),
// //     //         i = 0,
// //     //         row,
// //     //         col;

// //     //     myself.categories.children.forEach(function (button) {
// //     //         i += 1;
// //     //         row = Math.ceil(i / 2);
// //     //         col = 2 - (i % 2);
// //     //         button.setPosition(new Point(
// //     //             l + (col * xPadding + ((col - 1) * buttonWidth)),
// //     //             t + (row * yPadding + ((row - 1) * buttonHeight) + border)
// //     //         ));
// //     //     });

// //     //     myself.categories.setHeight(
// //     //         (rows + 1) * yPadding
// //     //             + rows * buttonHeight
// //     //             + 2 * border
// //     //     );
// //     // }

// //     // SpriteMorph.prototype.categories.forEach(function (cat) {
// //     //     if (!contains(['lists', 'other'], cat)) {
// //     //         addCategoryButton(cat);
// //     //     }
// //     // });
// //     // fixCategoriesLayout();
// //     this.add(this.categories);
// // };

// IDE_Morph.prototype.createSpriteBar = function () {
//     // assumes that the categories pane has already been created
//     var rotationStyleButtons = [],
//         thumbSize = new Point(45, 45),
//         nameField,
//         padlock,
//         thumbnail,
//         tabCorner = 15,
//         tabColors = this.tabColors,
//         tabBar = new AlignmentMorph('row', -tabCorner * 2),
//         tab,
//         symbols = ['\u2192', '\u21BB', '\u2194'],
//         labels = ['don\'t rotate', 'can rotate', 'only face left/right'],
//         myself = this;

//     if (this.spriteBar) {
//         this.spriteBar.destroy();
//     }

//     this.spriteBar = new Morph();
//     this.spriteBar.color = this.frameColor;
//     this.add(this.spriteBar);

//     // tab bar
//     tabBar.tabTo = function (tabString) {
//         var active;
//         myself.currentTab = tabString;
//         this.children.forEach(function (each) {
//             each.refresh();
//             if (each.state) {active = each; }
//         });
//         active.refresh(); // needed when programmatically tabbing
//         myself.createSpriteEditor();
//         myself.fixLayout('tabEditor');
//     };

//     tab = new TabMorph(
//         tabColors,
//         null, // target
//         function () {tabBar.tabTo('scripts'); },
//         localize('Scripts'), // label
//         function () {  // query
//             return myself.currentTab === 'scripts';
//         }
//     );
//     tab.padding = 3;
//     tab.corner = tabCorner;
//     tab.edge = 1;
//     tab.labelShadowOffset = new Point(-1, -1);
//     tab.labelShadowColor = tabColors[1];
//     tab.labelColor = this.buttonLabelColor;
//     tab.drawNew();
//     tab.fixLayout();
//     tabBar.add(tab);

//     tabBar.fixLayout();
//     tabBar.children.forEach(function (each) {
//         each.refresh();
//     });
//     this.spriteBar.tabBar = tabBar;
//     this.spriteBar.add(this.spriteBar.tabBar);

//     this.spriteBar.fixLayout = function () {
//         this.tabBar.setLeft(this.left());
//         this.tabBar.setBottom(this.bottom());
//     };
// };

// IDE_Morph.prototype.createSpriteEditor = function () {
//     // assumes that the logo pane and the stage have already been created
//     var scripts = this.currentSprite.scripts,
//         myself = this;

//     if (this.spriteEditor) {
//         this.spriteEditor.destroy();
//     }

//     if (this.currentTab === 'scripts') {
//         scripts.isDraggable = false;
//         scripts.color = this.groupColor;
//         scripts.cachedTexture = this.scriptsPaneTexture;

//         this.spriteEditor = new ScrollFrameMorph(
//             scripts,
//             null,
//             this.sliderColor
//         );
//         this.spriteEditor.padding = 10;
//         this.spriteEditor.growth = 50;
//         this.spriteEditor.isDraggable = false;
//         this.spriteEditor.acceptsDrops = false;
//         this.spriteEditor.contents.acceptsDrops = true;

//         scripts.scrollFrame = this.spriteEditor;
//         this.add(this.spriteEditor);
//         this.spriteEditor.scrollX(this.spriteEditor.padding);
//         this.spriteEditor.scrollY(this.spriteEditor.padding);
//     } 
// };