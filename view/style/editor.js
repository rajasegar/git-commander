'use strict';

module.exports = function (config) {
    return {
        "layout": {
            "hidden": true,
            "top": "center",
            "left": "center",
            "width": "80%",
            "height": "70%"
        },
        "textarea": {
            "top": "top",
            "left": "left",
            "width": "100%",
            "height": "100%-3",
            "border": "line",
            "mouse": true,
            "vi": true,
            "keys": true,
            "padding": {
                "left": 1,
                "right": 1
            },
            "style": {
                "bg": "blue"
            }
        },
        "menubar": {
            "align": "center",
            "bottom": 0,
            "width": "100%",
            "height": 3,
            "mouse": true,
            "border": "line",
            "vi": true,
            "keys": true,
            "style": {
                "prefix": {
                    "fg": "white"
                },
                "item": {
                    "fg": "cyan"
                },
                "selected": {
                    "fg": "cyan"
                }
            },
            "commands": {
                "SAVE & COMMIT": {
                    "keys": config.keys.editor.save
                },
                "CANCEL": {
                    "keys": config.keys.common.quit
                }
            }
        }
    };
};
