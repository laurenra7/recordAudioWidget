(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/RecordAudioWidget.editorPreview.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ui/RecordAudioWidget.css":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ui/RecordAudioWidget.css ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/*\nPlace your custom CSS here\n*/\n.not-supported {\n  color: red;\n  font-style: italic;\n}\n\n.outer-container {\n  font-family: \"HCo Ringside Narrow SSm\", Arial, sans-serif;\n}\n\n.instructions {\n  margin-top: 20px;\n  padding: 10px 0px 10px 0px;\n  border: 1px solid #cccccc;\n  background-color: lightyellow;\n}\n\n.instructions li {\n  padding-top: 10px;\n}\n\n.widget-record-audio {\n  width: 100%;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: flex-start;\n  align-items: center;\n  /*border: 1px solid mediumseagreen;*/\n}\n\n.widget-play-audio-show {\n  display: flex;\n  margin: 12px 0 0 0;\n}\n\n.widget-play-audio-hide {\n  display: none;\n  margin: 12px 0 0 0;\n}\n\n.btn-all {\n  margin: 12px 12px 0 0;\n  padding-top: 4px;\n  width: 30px;\n  height: 30px;\n  border: 1px solid #cccccc;\n}\n\n.btn-icon {\n  width: 30px;\n}\n\n.btn-download {\n  margin-left: 12px;\n  padding: 5px 7px;\n  background-color: #efefef;\n  cursor: pointer;\n  display: flex;\n}\n\n.btn-hide {\n  display: none;\n}\n\n.btn-enabled:hover, .btn-enabled:focus, .btn-download:hover, .btn-download:focus {\n  background-color: #d7d7d7;\n}\n\n.btn-disabled:hover, .btn-disabled:focus {\n  background-color: #aaaaaa;\n}\n\n.btn-record-circle {\n  display: inline-block;\n  width: 15px;\n  height: 15px;\n  margin: -2px;\n  background-color: red;\n  border-radius: 50%;\n}\n\n.btn-record-circle-disabled {\n  display: inline-block;\n  width: 15px;\n  height: 15px;\n  margin: -2px;\n  background-color: #aaaaaa;\n  border-radius: 50%;\n}\n\n.btn-record-circle-small {\n  display: inline-block;\n  width: 12px;\n  height: 12px;\n  margin: -2px;\n  background-color: red;\n  border-radius: 50%;\n}\n\n.btn-record {\n  width: 30px;\n}\n\n.btn-pause {\n  color: red;\n}\n\n.btn-color-red {\n  color: red;\n}\n\n.btn-color-black {\n  color: black;\n}\n\n.btn-stop {\n  color: black;\n}\n\n.btn-play {\n  color: black;\n}\n\n.btn-color-grey {\n  color: #aaaaaa;\n}\n\n.audio-player {\n  height: 32px;\n  border: 1px solid #cccccc;\n  border-radius: 16px;\n}\n\n.tooltip {\n  position: relative;\n  border-bottom: 1px dashed black;\n}\n\n/* Customize the look of the <audio> tag widget in Chromium browsers. */\n/*.widget-play-audio-show audio::-webkit-media-controls-panel, video::-webkit-media-controls-panel {*/\n/*    display: flex;*/\n/*    flex-direction: row;*/\n/*    align-items: center;*/\n/*    !* We use flex-start here to ensure that the play button is visible even*/\n/*     * if we are too small to show all controls.*/\n/*     *!*/\n/*    justify-content: flex-start;*/\n/*    -webkit-user-select: none;*/\n/*    position: relative;*/\n/*    width: 100%;*/\n/*    z-index: 0;*/\n/*    overflow: hidden;*/\n/*    text-align: right;*/\n/*    bottom: auto;*/\n/*    height: 30px;*/\n/*    background-color: rgba(239, 239, 239, 0.8);*/\n/*    border: 1px solid rgb(204, 204, 204);*/\n/*    border-radius: 0px;*/\n/*    !* The duration is also specified in MediaControlElements.cpp and LayoutTests/media/media-controls.js *!*/\n/*    transition: opacity 0.3s;*/\n/*}*/", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./src/RecordAudioWidget.editorPreview.tsx":
/*!*************************************************!*\
  !*** ./src/RecordAudioWidget.editorPreview.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPreviewCss = exports.preview = void 0;
var react_1 = __webpack_require__(/*! react */ "react");
var RecordAudio_1 = __webpack_require__(/*! ./components/RecordAudio */ "./src/components/RecordAudio.tsx");
var preview = /** @class */ (function (_super) {
    __extends(preview, _super);
    function preview() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    preview.prototype.render = function () {
        // return <HelloWorldSample sampleText={this.props.sampleText} />;
        // const inText = `[${this.props.inText}]`;
        // return <RecordAudio inText={inText}/>;
        // const file = `[${this.props.file}]`;
        // return <RecordAudio file={file}/>;
        // const fileUrl = `[${this.props.audioFileUrl}`;
        return react_1.createElement(RecordAudio_1.RecordAudio, null);
    };
    return preview;
}(react_1.Component));
exports.preview = preview;
function getPreviewCss() {
    return __webpack_require__(/*! ./ui/RecordAudioWidget.css */ "./src/ui/RecordAudioWidget.css");
}
exports.getPreviewCss = getPreviewCss;


/***/ }),

/***/ "./src/components/RecordAudio.tsx":
/*!****************************************!*\
  !*** ./src/components/RecordAudio.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecordAudio = void 0;
var react_1 = __webpack_require__(/*! react */ "react");
var RecordAudio = /** @class */ (function (_super) {
    __extends(RecordAudio, _super);
    /**
     * Check to see if browser supports getUserMedia for recording before doing anything else.
     * If not supported, the render function will disable buttons.
     * @param props
     */
    function RecordAudio(props) {
        var _this = _super.call(this, props) || this;
        _this.startRecording = function () {
            if (_this.state.isRecordingStarted) {
                if (!_this.state.isRecording) {
                    /* Resume recording after pause. */
                    if (_this.state.mediaRecorder) {
                        _this.state.mediaRecorder.resume();
                    }
                    _this.setState({ isRecording: true });
                }
            }
            else {
                if (_this.state.isRecordingSupported) {
                    navigator.mediaDevices.getUserMedia(
                    // only audio needed for this app
                    {
                        audio: true
                    })
                        .then(function (stream) {
                        /* Initialize a new MediaRecorder */
                        var mediaOptions = {
                            mimeType: RecordAudio.mimeType
                        };
                        var mediaRecorder = new MediaRecorder(stream, mediaOptions);
                        mediaRecorder.start();
                        var audioChunks = [];
                        /* Event listener for when new data is available from recording device. */
                        mediaRecorder.addEventListener("dataavailable", function (event) {
                            audioChunks.push(event.data);
                        });
                        _this.setState({ isRecordingStarted: true, isRecording: true });
                        /* Event listener for "stop" event.*/
                        mediaRecorder.addEventListener("stop", function () {
                            /* Collect audio chunks into a Blob, create URL for it, update state. */
                            var audioBlob = new Blob(audioChunks, { 'type': RecordAudio.mimeType });
                            var audioUrl = URL.createObjectURL(audioBlob);
                            _this.setState({ audioUrl: audioUrl, audioBlob: audioBlob, isRecording: false, isDone: true });
                            /* Update audioFileUrl attribute with the Blob URL */
                            if (_this.props.fileUrl) {
                                _this.props.fileUrl(audioUrl);
                            }
                            stream.getAudioTracks().forEach(function (track) { return track.stop(); });
                            // const reader = new FileReader();
                            // reader.onload = function(e){
                            //     // window.location.href = reader.result;
                            // };
                            // const blobUrl = reader.readAsDataURL(audioBlob);
                            /* don't forget to URL.revokeObjectURL() the audioUrl to release it when done playing/downloading/storing it */
                        });
                        _this.setState({ mediaRecorder: mediaRecorder });
                    });
                }
            }
        };
        _this.pauseRecording = function () {
            if (_this.state.mediaRecorder) {
                _this.state.mediaRecorder.pause();
            }
            _this.setState({ isRecording: false });
        };
        _this.stopRecording = function () {
            if (_this.state.isRecording) {
                var mediaRecorder = _this.state.mediaRecorder;
                if (_this.state.mediaRecorder) {
                    _this.state.mediaRecorder.stop();
                }
                _this.setState({
                    isDone: true,
                    isRecording: false,
                    isRecordButtonsEnabled: false
                });
                console.log("done"); // testing only
            }
        };
        _this.saveRecording = function () {
            var audioBlob = _this.state.audioBlob;
            var microFlowName = _this.props.microflowString;
            var entityName = _this.props.entityString;
            mx.data.create({
                entity: entityName,
                callback: function (obj) {
                    obj.set("Name", "recording.weba");
                    mx.data.saveDocument(obj.toString(), "new_audio.weba", {}, audioBlob, function () {
                        mx.data.action({
                            params: {
                                applyto: "selection",
                                actionname: microFlowName,
                                guids: [obj.toString()]
                            },
                            callback: function () { },
                            error: function (error) {
                                /* Error in microflow call
                                Likely an incorrect Microflow name listed in widget options, check microflowName variable */
                                alert("Error attempting to save audio.\nContact app support.\n\n (1) " + error);
                                mx.data.remove({
                                    guid: obj.toString(),
                                    callback: function () { },
                                    error: function () { } // Error deleting object
                                });
                            }
                        });
                    }, function (error) {
                        // Error in save document call
                        alert("Error attempting to save audio.\nContact app support\n\n (2) " + error);
                        mx.data.remove({
                            guid: obj.toString(),
                            callback: function () { },
                            error: function () { } // Error deleting object
                        });
                    });
                },
                error: function (error) {
                    // Error in create entity call
                    // Likely an incorrect entity name listed in widget options, check entityName variable
                    alert("Error creating audio file.\nContact app support.\n\n (3) " + error);
                }
            });
        };
        _this.deleteRecording = function () {
            if (_this.state.audioUrl) {
                URL.revokeObjectURL(_this.state.audioUrl);
                _this.setState({
                    isDone: false,
                    isRecording: false,
                    isRecordingStarted: false,
                    isRecordButtonsEnabled: true
                });
            }
        };
        var isRecordingSupported = true;
        var deviceList = [MediaDeviceInfo];
        // const inText = this.props.inText
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            if (MediaRecorder.isTypeSupported(RecordAudio.mimeType)) {
                isRecordingSupported = true;
                /* List the recording devices to let the user choose. Returns an array of InputDeviceInfo */
                navigator.mediaDevices.enumerateDevices().then(function (deviceList) {
                    // devices = devices.filter((deviceInfo) => deviceInfo.kind === 'audioinput');
                    deviceList = deviceList.filter(function (deviceInfo) { return deviceInfo.kind === 'audioinput'; });
                    // devices.forEach(entry => deviceList.push(Object.assign({}, entry)));
                    console.log('Devices = ' + deviceList);
                });
            }
            else {
                isRecordingSupported = false;
            }
        }
        else {
            isRecordingSupported = false;
        }
        if (!isRecordingSupported) {
            alert('Your browser does not support recording with getUserMedia. Try a different browser.');
        }
        /* Set defaults for state variables */
        _this.state = {
            isRecordingSupported: isRecordingSupported,
            isRecordingStarted: false,
            isRecording: false,
            isPaused: false,
            isDone: false,
            isRecordButtonsEnabled: true,
        };
        return _this;
    }
    RecordAudio.prototype.render = function () {
        // const className = classNames(this.props.className);
        // See https://reactjs.org/docs/conditional-rendering.html to set state and render button(s)
        // and https://stackoverflow.com/questions/41092677/ternary-operator-on-style-with-react-js-es-6
        // <ButtonRecord isRecording={this.state.isRecording} recordHandler={this.startRecording}/>
        // <ButtonPause isRecording={this.state.isRecording} pauseHandler={this.pauseRecording}/>
        var isRecordingSupported = this.state.isRecordingSupported;
        var isRecordButtonsEnabled = this.state.isRecordButtonsEnabled;
        var isRecording = this.state.isRecording;
        var isDone = this.state.isDone;
        var showInstructions = true;
        return !isRecordingSupported ? react_1.createElement("div", { className: "not-supported" }, "Recording not supported in this browser.") :
            react_1.createElement("div", { className: "outer-container" },
                react_1.createElement("div", { className: "widget-record-audio" },
                    react_1.createElement("button", { style: isRecording ? { display: 'none' } : { display: 'inline-block' }, type: "button", disabled: !isRecordButtonsEnabled, className: isRecordButtonsEnabled ? "btn-record btn-all btn-icon btn-enabled" : "btn-record btn-all btn-icon", onClick: this.startRecording },
                        react_1.createElement("div", { className: isRecordButtonsEnabled ? "btn-record-circle" : "btn-record-circle-disabled" })),
                    react_1.createElement("button", { style: isRecording ? { display: 'inline-block' } : { display: 'none' }, type: "button", disabled: !isRecordButtonsEnabled, className: isRecordButtonsEnabled ? "btn-color-red btn-all btn-icon btn-enabled" : "btn-color-grey btn-all btn-icon", onClick: this.pauseRecording },
                        react_1.createElement("span", { className: "glyphicon glyphicon-pause" })),
                    react_1.createElement("button", { type: "button", disabled: !isRecordButtonsEnabled, className: isRecordButtonsEnabled ? "btn-color-black btn-all btn-icon btn-enabled" : "btn-color-grey btn-all btn-icon", onClick: this.stopRecording },
                        react_1.createElement("span", { className: "glyphicon glyphicon-stop" })),
                    react_1.createElement("div", { className: isDone ? "widget-play-audio-show" : "widget-play-audio-hide" },
                        react_1.createElement("audio", { className: "audio-player", controls: true, src: this.state.audioUrl },
                            "Your browser does not support the ",
                            react_1.createElement("code", null, "audio"),
                            " element.")),
                    react_1.createElement("div", { style: { "margin": "0px 0px 0px 15px" } },
                        react_1.createElement("button", { type: "button", disabled: !isDone, className: isDone ? "btn-color-black btn-all btn-icon btn-enabled" : "btn-hide", onClick: this.saveRecording },
                            react_1.createElement("span", { className: "glyphicon glyphicon-plus" })),
                        react_1.createElement("button", { type: "button", disabled: !isDone, className: isDone ? "btn-color-black btn-all btn-icon btn-enabled" : "btn-hide", onClick: this.deleteRecording },
                            react_1.createElement("span", { className: "glyphicon glyphicon-remove" })))),
                react_1.createElement("div", { className: "instructions", style: { display: this.props.showInstructs ? "block" : "none" } },
                    react_1.createElement("ol", null,
                        react_1.createElement("li", null,
                            "Press ",
                            react_1.createElement("span", { className: "btn-record-circle-small", style: { margin: "-1px 2px" } }),
                            " to record a message. You can press ",
                            react_1.createElement("span", { className: "glyphicon glyphicon-pause", style: { color: "red" } }),
                            " to pause."),
                        react_1.createElement("li", null,
                            "Press ",
                            react_1.createElement("span", { className: "glyphicon glyphicon-stop" }),
                            " to stop. You can press ",
                            react_1.createElement("span", { className: "glyphicon glyphicon-play" }),
                            " to review it."),
                        react_1.createElement("li", null,
                            "Press ",
                            react_1.createElement("span", { className: "glyphicon glyphicon-plus", style: { margin: "0px 0px 10px 0px" } }),
                            " to name the audio and save it to ",
                            this.props.locationVal,
                            ".")),
                    react_1.createElement("span", { style: { margin: "0px 0px 15px 15px" } },
                        "Or press ",
                        react_1.createElement("span", { className: "glyphicon glyphicon-remove" }),
                        " to delete the current recording and start a new one.")));
    };
    RecordAudio.mimeType = 'audio/webm;codecs=opus';
    return RecordAudio;
}(react_1.Component));
exports.RecordAudio = RecordAudio;


/***/ }),

/***/ "./src/ui/RecordAudioWidget.css":
/*!**************************************!*\
  !*** ./src/ui/RecordAudioWidget.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./RecordAudioWidget.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/ui/RecordAudioWidget.css");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ })));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL1JlY29yZEF1ZGlvV2lkZ2V0LmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL3NyYy9SZWNvcmRBdWRpb1dpZGdldC5lZGl0b3JQcmV2aWV3LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9SZWNvcmRBdWRpby50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL1JlY29yZEF1ZGlvV2lkZ2V0LmNzcz8wY2M5Iiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsd0dBQW1EO0FBQzdGO0FBQ0E7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QixtQkFBTyxDQUFDLGtPQUFnSDs7QUFFN0k7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOzs7Ozs7Ozs7Ozs7QUNQQSxrQyIsImZpbGUiOiJ3aWRnZXRzL1JlY29yZEF1ZGlvV2lkZ2V0LmVkaXRvclByZXZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9SZWNvcmRBdWRpb1dpZGdldC5lZGl0b3JQcmV2aWV3LnRzeFwiKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKlxcblBsYWNlIHlvdXIgY3VzdG9tIENTUyBoZXJlXFxuKi9cXG4ubm90LXN1cHBvcnRlZCB7XFxuICBjb2xvcjogcmVkO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4ub3V0ZXItY29udGFpbmVyIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSENvIFJpbmdzaWRlIE5hcnJvdyBTU21cXFwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmluc3RydWN0aW9ucyB7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgcGFkZGluZzogMTBweCAwcHggMTBweCAwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjY2NjO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHR5ZWxsb3c7XFxufVxcblxcbi5pbnN0cnVjdGlvbnMgbGkge1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxufVxcblxcbi53aWRnZXQtcmVjb3JkLWF1ZGlvIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLypib3JkZXI6IDFweCBzb2xpZCBtZWRpdW1zZWFncmVlbjsqL1xcbn1cXG5cXG4ud2lkZ2V0LXBsYXktYXVkaW8tc2hvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luOiAxMnB4IDAgMCAwO1xcbn1cXG5cXG4ud2lkZ2V0LXBsYXktYXVkaW8taGlkZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgbWFyZ2luOiAxMnB4IDAgMCAwO1xcbn1cXG5cXG4uYnRuLWFsbCB7XFxuICBtYXJnaW46IDEycHggMTJweCAwIDA7XFxuICBwYWRkaW5nLXRvcDogNHB4O1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjY2NjO1xcbn1cXG5cXG4uYnRuLWljb24ge1xcbiAgd2lkdGg6IDMwcHg7XFxufVxcblxcbi5idG4tZG93bmxvYWQge1xcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XFxuICBwYWRkaW5nOiA1cHggN3B4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5idG4taGlkZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uYnRuLWVuYWJsZWQ6aG92ZXIsIC5idG4tZW5hYmxlZDpmb2N1cywgLmJ0bi1kb3dubG9hZDpob3ZlciwgLmJ0bi1kb3dubG9hZDpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDdkN2Q3O1xcbn1cXG5cXG4uYnRuLWRpc2FibGVkOmhvdmVyLCAuYnRuLWRpc2FibGVkOmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhYWFhYWE7XFxufVxcblxcbi5idG4tcmVjb3JkLWNpcmNsZSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogMTVweDtcXG4gIGhlaWdodDogMTVweDtcXG4gIG1hcmdpbjogLTJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLmJ0bi1yZWNvcmQtY2lyY2xlLWRpc2FibGVkIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAxNXB4O1xcbiAgaGVpZ2h0OiAxNXB4O1xcbiAgbWFyZ2luOiAtMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FhYWFhYTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLmJ0bi1yZWNvcmQtY2lyY2xlLXNtYWxsIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAxMnB4O1xcbiAgaGVpZ2h0OiAxMnB4O1xcbiAgbWFyZ2luOiAtMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4uYnRuLXJlY29yZCB7XFxuICB3aWR0aDogMzBweDtcXG59XFxuXFxuLmJ0bi1wYXVzZSB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG4uYnRuLWNvbG9yLXJlZCB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG4uYnRuLWNvbG9yLWJsYWNrIHtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLmJ0bi1zdG9wIHtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLmJ0bi1wbGF5IHtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLmJ0bi1jb2xvci1ncmV5IHtcXG4gIGNvbG9yOiAjYWFhYWFhO1xcbn1cXG5cXG4uYXVkaW8tcGxheWVyIHtcXG4gIGhlaWdodDogMzJweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2M7XFxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbn1cXG5cXG4udG9vbHRpcCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIGJsYWNrO1xcbn1cXG5cXG4vKiBDdXN0b21pemUgdGhlIGxvb2sgb2YgdGhlIDxhdWRpbz4gdGFnIHdpZGdldCBpbiBDaHJvbWl1bSBicm93c2Vycy4gKi9cXG4vKi53aWRnZXQtcGxheS1hdWRpby1zaG93IGF1ZGlvOjotd2Via2l0LW1lZGlhLWNvbnRyb2xzLXBhbmVsLCB2aWRlbzo6LXdlYmtpdC1tZWRpYS1jb250cm9scy1wYW5lbCB7Ki9cXG4vKiAgICBkaXNwbGF5OiBmbGV4OyovXFxuLyogICAgZmxleC1kaXJlY3Rpb246IHJvdzsqL1xcbi8qICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7Ki9cXG4vKiAgICAhKiBXZSB1c2UgZmxleC1zdGFydCBoZXJlIHRvIGVuc3VyZSB0aGF0IHRoZSBwbGF5IGJ1dHRvbiBpcyB2aXNpYmxlIGV2ZW4qL1xcbi8qICAgICAqIGlmIHdlIGFyZSB0b28gc21hbGwgdG8gc2hvdyBhbGwgY29udHJvbHMuKi9cXG4vKiAgICAgKiEqL1xcbi8qICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDsqL1xcbi8qICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7Ki9cXG4vKiAgICBwb3NpdGlvbjogcmVsYXRpdmU7Ki9cXG4vKiAgICB3aWR0aDogMTAwJTsqL1xcbi8qICAgIHotaW5kZXg6IDA7Ki9cXG4vKiAgICBvdmVyZmxvdzogaGlkZGVuOyovXFxuLyogICAgdGV4dC1hbGlnbjogcmlnaHQ7Ki9cXG4vKiAgICBib3R0b206IGF1dG87Ki9cXG4vKiAgICBoZWlnaHQ6IDMwcHg7Ki9cXG4vKiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzOSwgMjM5LCAyMzksIDAuOCk7Ki9cXG4vKiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjA0LCAyMDQsIDIwNCk7Ki9cXG4vKiAgICBib3JkZXItcmFkaXVzOiAwcHg7Ki9cXG4vKiAgICAhKiBUaGUgZHVyYXRpb24gaXMgYWxzbyBzcGVjaWZpZWQgaW4gTWVkaWFDb250cm9sRWxlbWVudHMuY3BwIGFuZCBMYXlvdXRUZXN0cy9tZWRpYS9tZWRpYS1jb250cm9scy5qcyAqISovXFxuLyogICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzOyovXFxuLyp9Ki9cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiaW1wb3J0IHsgQ29tcG9uZW50LCBSZWFjdE5vZGUsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuLy8gaW1wb3J0IHsgSGVsbG9Xb3JsZFNhbXBsZSB9IGZyb20gXCIuL2NvbXBvbmVudHMvSGVsbG9Xb3JsZFNhbXBsZVwiO1xyXG5pbXBvcnQgeyBSZWNvcmRBdWRpb1dpZGdldFByZXZpZXdQcm9wcyB9IGZyb20gXCIuLi90eXBpbmdzL1JlY29yZEF1ZGlvV2lkZ2V0UHJvcHNcIjtcclxuaW1wb3J0IHtSZWNvcmRBdWRpb30gZnJvbSBcIi4vY29tcG9uZW50cy9SZWNvcmRBdWRpb1wiO1xyXG5cclxuZGVjbGFyZSBmdW5jdGlvbiByZXF1aXJlKG5hbWU6IHN0cmluZyk6IHN0cmluZztcclxuXHJcbmV4cG9ydCBjbGFzcyBwcmV2aWV3IGV4dGVuZHMgQ29tcG9uZW50PFJlY29yZEF1ZGlvV2lkZ2V0UHJldmlld1Byb3BzPiB7XHJcbiAgICByZW5kZXIoKTogUmVhY3ROb2RlIHtcclxuICAgICAgICAvLyByZXR1cm4gPEhlbGxvV29ybGRTYW1wbGUgc2FtcGxlVGV4dD17dGhpcy5wcm9wcy5zYW1wbGVUZXh0fSAvPjtcclxuICAgICAgICAvLyBjb25zdCBpblRleHQgPSBgWyR7dGhpcy5wcm9wcy5pblRleHR9XWA7XHJcbiAgICAgICAgLy8gcmV0dXJuIDxSZWNvcmRBdWRpbyBpblRleHQ9e2luVGV4dH0vPjtcclxuICAgICAgICAvLyBjb25zdCBmaWxlID0gYFske3RoaXMucHJvcHMuZmlsZX1dYDtcclxuICAgICAgICAvLyByZXR1cm4gPFJlY29yZEF1ZGlvIGZpbGU9e2ZpbGV9Lz47XHJcbiAgICAgICAgLy8gY29uc3QgZmlsZVVybCA9IGBbJHt0aGlzLnByb3BzLmF1ZGlvRmlsZVVybH1gO1xyXG4gICAgICAgIHJldHVybiA8UmVjb3JkQXVkaW8vPjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFByZXZpZXdDc3MoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiByZXF1aXJlKFwiLi91aS9SZWNvcmRBdWRpb1dpZGdldC5jc3NcIik7XHJcbn1cclxuIiwiaW1wb3J0IHsgQ1NTUHJvcGVydGllcywgQ29tcG9uZW50LCBSZWFjdE5vZGUsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmVjb3JkQXVkaW9Qcm9wcyB7XHJcbiAgICBmaWxlVXJsPzogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWQ7XHJcbiAgICB0ZXN0U3R1ZmY/OiBzdHJpbmc7XHJcbiAgICBjbGFzc05hbWU/OiBzdHJpbmc7XHJcbiAgICBpbmRleD86IG51bWJlcjtcclxuICAgIHN0eWxlPzogQ1NTUHJvcGVydGllcztcclxuICAgIHRhYkluZGV4PzogbnVtYmVyO1xyXG4gICAgaWQ/OiBzdHJpbmc7XHJcbiAgICBoYXNFcnJvcj86IGJvb2xlYW47XHJcbiAgICByZXF1aXJlZD86IGJvb2xlYW47XHJcbiAgICBkaXNhYmxlZD86IGJvb2xlYW47XHJcbiAgICBzaG93SW5zdHJ1Y3RzPzogYm9vbGVhbjtcclxuICAgIGxvY2F0aW9uVmFsPzogc3RyaW5nO1xyXG4gICAgbWljcm9mbG93U3RyaW5nPzogc3RyaW5nO1xyXG4gICAgZW50aXR5U3RyaW5nPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJlY29yZEF1ZGlvU3RhdGUge1xyXG4gICAgaXNSZWNvcmRpbmdTdXBwb3J0ZWQ6IGJvb2xlYW47XHJcbiAgICAvLyBtaWNMaXN0PzogTWVkaWFEZXZpY2VJbmZvW107XHJcbiAgICBpc1JlY29yZGluZ1N0YXJ0ZWQ6IGJvb2xlYW47XHJcbiAgICBpc1JlY29yZGluZzogYm9vbGVhbjtcclxuICAgIGlzUGF1c2VkOiBib29sZWFuO1xyXG4gICAgaXNEb25lOiBib29sZWFuO1xyXG4gICAgaXNSZWNvcmRCdXR0b25zRW5hYmxlZDogYm9vbGVhbjtcclxuICAgIG1lZGlhUmVjb3JkZXI/OiBNZWRpYVJlY29yZGVyO1xyXG4gICAgYXVkaW9Vcmw/OiBzdHJpbmc7XHJcbiAgICBhdWRpb0Jsb2I/OiBCbG9iO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUmVjb3JkQXVkaW8gZXh0ZW5kcyBDb21wb25lbnQ8UmVjb3JkQXVkaW9Qcm9wcywgUmVjb3JkQXVkaW9TdGF0ZT4ge1xyXG5cclxuICAgIHN0YXRpYyBtaW1lVHlwZTogc3RyaW5nID0gJ2F1ZGlvL3dlYm07Y29kZWNzPW9wdXMnO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2sgdG8gc2VlIGlmIGJyb3dzZXIgc3VwcG9ydHMgZ2V0VXNlck1lZGlhIGZvciByZWNvcmRpbmcgYmVmb3JlIGRvaW5nIGFueXRoaW5nIGVsc2UuXHJcbiAgICAgKiBJZiBub3Qgc3VwcG9ydGVkLCB0aGUgcmVuZGVyIGZ1bmN0aW9uIHdpbGwgZGlzYWJsZSBidXR0b25zLlxyXG4gICAgICogQHBhcmFtIHByb3BzXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBSZWNvcmRBdWRpb1Byb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIGxldCBpc1JlY29yZGluZ1N1cHBvcnRlZCA9IHRydWU7XHJcbiAgICAgICAgbGV0IGRldmljZUxpc3QgPSBbTWVkaWFEZXZpY2VJbmZvXTtcclxuICAgICAgICAvLyBjb25zdCBpblRleHQgPSB0aGlzLnByb3BzLmluVGV4dFxyXG4gICAgICAgIGlmIChuYXZpZ2F0b3IubWVkaWFEZXZpY2VzICYmIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKSB7XHJcbiAgICAgICAgICAgIGlmIChNZWRpYVJlY29yZGVyLmlzVHlwZVN1cHBvcnRlZChSZWNvcmRBdWRpby5taW1lVHlwZSkpIHtcclxuICAgICAgICAgICAgICAgIGlzUmVjb3JkaW5nU3VwcG9ydGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIC8qIExpc3QgdGhlIHJlY29yZGluZyBkZXZpY2VzIHRvIGxldCB0aGUgdXNlciBjaG9vc2UuIFJldHVybnMgYW4gYXJyYXkgb2YgSW5wdXREZXZpY2VJbmZvICovXHJcbiAgICAgICAgICAgICAgICBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmVudW1lcmF0ZURldmljZXMoKS50aGVuKChkZXZpY2VMaXN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZGV2aWNlcyA9IGRldmljZXMuZmlsdGVyKChkZXZpY2VJbmZvKSA9PiBkZXZpY2VJbmZvLmtpbmQgPT09ICdhdWRpb2lucHV0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGV2aWNlTGlzdCA9IGRldmljZUxpc3QuZmlsdGVyKChkZXZpY2VJbmZvKSA9PiBkZXZpY2VJbmZvLmtpbmQgPT09ICdhdWRpb2lucHV0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZGV2aWNlcy5mb3JFYWNoKGVudHJ5ID0+IGRldmljZUxpc3QucHVzaChPYmplY3QuYXNzaWduKHt9LCBlbnRyeSkpKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRGV2aWNlcyA9ICcgKyBkZXZpY2VMaXN0KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaXNSZWNvcmRpbmdTdXBwb3J0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaXNSZWNvcmRpbmdTdXBwb3J0ZWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFpc1JlY29yZGluZ1N1cHBvcnRlZCkge1xyXG4gICAgICAgICAgICBhbGVydCgnWW91ciBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgcmVjb3JkaW5nIHdpdGggZ2V0VXNlck1lZGlhLiBUcnkgYSBkaWZmZXJlbnQgYnJvd3Nlci4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLyogU2V0IGRlZmF1bHRzIGZvciBzdGF0ZSB2YXJpYWJsZXMgKi9cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBpc1JlY29yZGluZ1N1cHBvcnRlZDogaXNSZWNvcmRpbmdTdXBwb3J0ZWQsXHJcbiAgICAgICAgICAgIGlzUmVjb3JkaW5nU3RhcnRlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIGlzUmVjb3JkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgaXNQYXVzZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBpc0RvbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICBpc1JlY29yZEJ1dHRvbnNFbmFibGVkOiB0cnVlLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRSZWNvcmRpbmcgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuaXNSZWNvcmRpbmdTdGFydGVkKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5zdGF0ZS5pc1JlY29yZGluZykge1xyXG4gICAgICAgICAgICAgICAgLyogUmVzdW1lIHJlY29yZGluZyBhZnRlciBwYXVzZS4gKi9cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLm1lZGlhUmVjb3JkZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLm1lZGlhUmVjb3JkZXIucmVzdW1lKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNSZWNvcmRpbmc6IHRydWUgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmlzUmVjb3JkaW5nU3VwcG9ydGVkKSB7XHJcbiAgICAgICAgICAgICAgICBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYShcclxuICAgICAgICAgICAgICAgICAgICAvLyBvbmx5IGF1ZGlvIG5lZWRlZCBmb3IgdGhpcyBhcHBcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1ZGlvOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHN0cmVhbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qIEluaXRpYWxpemUgYSBuZXcgTWVkaWFSZWNvcmRlciAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtZWRpYU9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW1lVHlwZTogUmVjb3JkQXVkaW8ubWltZVR5cGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWVkaWFSZWNvcmRlciA9IG5ldyBNZWRpYVJlY29yZGVyKHN0cmVhbSwgbWVkaWFPcHRpb25zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVkaWFSZWNvcmRlci5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhdWRpb0NodW5rczogYW55ID0gW107XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvKiBFdmVudCBsaXN0ZW5lciBmb3Igd2hlbiBuZXcgZGF0YSBpcyBhdmFpbGFibGUgZnJvbSByZWNvcmRpbmcgZGV2aWNlLiAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZWRpYVJlY29yZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJkYXRhYXZhaWxhYmxlXCIsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1ZGlvQ2h1bmtzLnB1c2goZXZlbnQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKCB7IGlzUmVjb3JkaW5nU3RhcnRlZDogdHJ1ZSwgaXNSZWNvcmRpbmc6IHRydWUgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvKiBFdmVudCBsaXN0ZW5lciBmb3IgXCJzdG9wXCIgZXZlbnQuKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVkaWFSZWNvcmRlci5hZGRFdmVudExpc3RlbmVyKFwic3RvcFwiLCAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogQ29sbGVjdCBhdWRpbyBjaHVua3MgaW50byBhIEJsb2IsIGNyZWF0ZSBVUkwgZm9yIGl0LCB1cGRhdGUgc3RhdGUuICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhdWRpb0Jsb2IgPSBuZXcgQmxvYihhdWRpb0NodW5rcywgeyd0eXBlJyA6IFJlY29yZEF1ZGlvLm1pbWVUeXBlfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhdWRpb1VybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYXVkaW9CbG9iKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoIHsgYXVkaW9Vcmw6IGF1ZGlvVXJsLCBhdWRpb0Jsb2I6IGF1ZGlvQmxvYiwgaXNSZWNvcmRpbmc6IGZhbHNlLCBpc0RvbmU6IHRydWUgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogVXBkYXRlIGF1ZGlvRmlsZVVybCBhdHRyaWJ1dGUgd2l0aCB0aGUgQmxvYiBVUkwgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmZpbGVVcmwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmZpbGVVcmwoYXVkaW9VcmwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmVhbS5nZXRBdWRpb1RyYWNrcygpLmZvckVhY2goIHRyYWNrID0+IHRyYWNrLnN0b3AoKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAvLyB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHJlYWRlci5yZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc3QgYmxvYlVybCA9IHJlYWRlci5yZWFkQXNEYXRhVVJMKGF1ZGlvQmxvYik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBkb24ndCBmb3JnZXQgdG8gVVJMLnJldm9rZU9iamVjdFVSTCgpIHRoZSBhdWRpb1VybCB0byByZWxlYXNlIGl0IHdoZW4gZG9uZSBwbGF5aW5nL2Rvd25sb2FkaW5nL3N0b3JpbmcgaXQgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKCB7IG1lZGlhUmVjb3JkZXI6IG1lZGlhUmVjb3JkZXJ9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHBhdXNlUmVjb3JkaW5nID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLm1lZGlhUmVjb3JkZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5tZWRpYVJlY29yZGVyLnBhdXNlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc1JlY29yZGluZzogZmFsc2UgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHN0b3BSZWNvcmRpbmcgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuaXNSZWNvcmRpbmcpIHtcclxuICAgICAgICAgICAgY29uc3QgbWVkaWFSZWNvcmRlciA9IHRoaXMuc3RhdGUubWVkaWFSZWNvcmRlcjtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUubWVkaWFSZWNvcmRlcikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5tZWRpYVJlY29yZGVyLnN0b3AoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGlzRG9uZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGlzUmVjb3JkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGlzUmVjb3JkQnV0dG9uc0VuYWJsZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImRvbmVcIik7IC8vIHRlc3Rpbmcgb25seVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgc2F2ZVJlY29yZGluZyA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBhdWRpb0Jsb2IgPSB0aGlzLnN0YXRlLmF1ZGlvQmxvYjtcclxuICAgICAgICBjb25zdCBtaWNyb0Zsb3dOYW1lID0gdGhpcy5wcm9wcy5taWNyb2Zsb3dTdHJpbmchO1xyXG4gICAgICAgIGNvbnN0IGVudGl0eU5hbWUgPSB0aGlzLnByb3BzLmVudGl0eVN0cmluZyE7XHJcblxyXG4gICAgICAgIG14LmRhdGEuY3JlYXRlKHtcclxuICAgICAgICAgICAgZW50aXR5OiBlbnRpdHlOYW1lLFxyXG4gICAgICAgICAgICBjYWxsYmFjayA6IGZ1bmN0aW9uIChvYmopIHtcclxuICAgICAgICAgICAgICAgIG9iai5zZXQoXCJOYW1lXCIsIFwicmVjb3JkaW5nLndlYmFcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgbXguZGF0YS5zYXZlRG9jdW1lbnQoXHJcbiAgICAgICAgICAgICAgICAgICAgb2JqLnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICAgICAgXCJuZXdfYXVkaW8ud2ViYVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHt9LFxyXG4gICAgICAgICAgICAgICAgICAgIGF1ZGlvQmxvYiBhcyBCbG9iLFxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBteC5kYXRhLmFjdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBseXRvOiBcInNlbGVjdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbm5hbWU6IG1pY3JvRmxvd05hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3VpZHM6IFtvYmoudG9TdHJpbmcoKV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCl7fSwgICAgLy8gU3VjY2Vzc1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbihlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIEVycm9yIGluIG1pY3JvZmxvdyBjYWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGlrZWx5IGFuIGluY29ycmVjdCBNaWNyb2Zsb3cgbmFtZSBsaXN0ZWQgaW4gd2lkZ2V0IG9wdGlvbnMsIGNoZWNrIG1pY3JvZmxvd05hbWUgdmFyaWFibGUgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydChgRXJyb3IgYXR0ZW1wdGluZyB0byBzYXZlIGF1ZGlvLlxcbkNvbnRhY3QgYXBwIHN1cHBvcnQuXFxuXFxuICgxKSAke2Vycm9yfWApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXguZGF0YS5yZW1vdmUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBndWlkOiBvYmoudG9TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgpIHt9LCAgIC8vIFN1Y2Nlc3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICgpIHt9ICAgICAgIC8vIEVycm9yIGRlbGV0aW5nIG9iamVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBFcnJvciBpbiBzYXZlIGRvY3VtZW50IGNhbGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoYEVycm9yIGF0dGVtcHRpbmcgdG8gc2F2ZSBhdWRpby5cXG5Db250YWN0IGFwcCBzdXBwb3J0XFxuXFxuICgyKSAke2Vycm9yfWApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG14LmRhdGEucmVtb3ZlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGd1aWQ6IG9iai50b1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgpIHt9LCAgICAgICAvLyBTdWNjZXNzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKCkge30gICAgICAgICAgIC8vIEVycm9yIGRlbGV0aW5nIG9iamVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIC8vIEVycm9yIGluIGNyZWF0ZSBlbnRpdHkgY2FsbFxyXG4gICAgICAgICAgICAgICAgLy8gTGlrZWx5IGFuIGluY29ycmVjdCBlbnRpdHkgbmFtZSBsaXN0ZWQgaW4gd2lkZ2V0IG9wdGlvbnMsIGNoZWNrIGVudGl0eU5hbWUgdmFyaWFibGVcclxuICAgICAgICAgICAgICAgIGFsZXJ0KGBFcnJvciBjcmVhdGluZyBhdWRpbyBmaWxlLlxcbkNvbnRhY3QgYXBwIHN1cHBvcnQuXFxuXFxuICgzKSAke2Vycm9yfWApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfTtcclxuXHJcbiAgICBkZWxldGVSZWNvcmRpbmcgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuYXVkaW9VcmwpIHtcclxuICAgICAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTCh0aGlzLnN0YXRlLmF1ZGlvVXJsKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBpc0RvbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaXNSZWNvcmRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaXNSZWNvcmRpbmdTdGFydGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGlzUmVjb3JkQnV0dG9uc0VuYWJsZWQ6IHRydWVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJlbmRlcigpOiBSZWFjdE5vZGUge1xyXG4gICAgICAgIC8vIGNvbnN0IGNsYXNzTmFtZSA9IGNsYXNzTmFtZXModGhpcy5wcm9wcy5jbGFzc05hbWUpO1xyXG4gICAgICAgIC8vIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvY29uZGl0aW9uYWwtcmVuZGVyaW5nLmh0bWwgdG8gc2V0IHN0YXRlIGFuZCByZW5kZXIgYnV0dG9uKHMpXHJcbiAgICAgICAgLy8gYW5kIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzQxMDkyNjc3L3Rlcm5hcnktb3BlcmF0b3Itb24tc3R5bGUtd2l0aC1yZWFjdC1qcy1lcy02XHJcbiAgICAgICAgLy8gPEJ1dHRvblJlY29yZCBpc1JlY29yZGluZz17dGhpcy5zdGF0ZS5pc1JlY29yZGluZ30gcmVjb3JkSGFuZGxlcj17dGhpcy5zdGFydFJlY29yZGluZ30vPlxyXG4gICAgICAgIC8vIDxCdXR0b25QYXVzZSBpc1JlY29yZGluZz17dGhpcy5zdGF0ZS5pc1JlY29yZGluZ30gcGF1c2VIYW5kbGVyPXt0aGlzLnBhdXNlUmVjb3JkaW5nfS8+XHJcblxyXG4gICAgICAgIGNvbnN0IGlzUmVjb3JkaW5nU3VwcG9ydGVkID0gdGhpcy5zdGF0ZS5pc1JlY29yZGluZ1N1cHBvcnRlZDtcclxuICAgICAgICBjb25zdCBpc1JlY29yZEJ1dHRvbnNFbmFibGVkID0gdGhpcy5zdGF0ZS5pc1JlY29yZEJ1dHRvbnNFbmFibGVkO1xyXG4gICAgICAgIGNvbnN0IGlzUmVjb3JkaW5nID0gdGhpcy5zdGF0ZS5pc1JlY29yZGluZztcclxuICAgICAgICBjb25zdCBpc0RvbmUgPSB0aGlzLnN0YXRlLmlzRG9uZTtcclxuICAgICAgICBjb25zdCBzaG93SW5zdHJ1Y3Rpb25zID0gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gIWlzUmVjb3JkaW5nU3VwcG9ydGVkID8gPGRpdiBjbGFzc05hbWU9XCJub3Qtc3VwcG9ydGVkXCI+UmVjb3JkaW5nIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyLjwvZGl2PiA6XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3V0ZXItY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1yZWNvcmQtYXVkaW9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHN0eWxlPXsgaXNSZWNvcmRpbmcgPyB7IGRpc3BsYXk6ICdub25lJyB9IDogeyBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyB9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFpc1JlY29yZEJ1dHRvbnNFbmFibGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsgaXNSZWNvcmRCdXR0b25zRW5hYmxlZCA/IFwiYnRuLXJlY29yZCBidG4tYWxsIGJ0bi1pY29uIGJ0bi1lbmFibGVkXCIgOiBcImJ0bi1yZWNvcmQgYnRuLWFsbCBidG4taWNvblwiIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc3RhcnRSZWNvcmRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IGlzUmVjb3JkQnV0dG9uc0VuYWJsZWQgPyBcImJ0bi1yZWNvcmQtY2lyY2xlXCIgOiBcImJ0bi1yZWNvcmQtY2lyY2xlLWRpc2FibGVkXCIgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT17IGlzUmVjb3JkaW5nID8geyBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyB9IDogeyBkaXNwbGF5OiAnbm9uZSd9IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFpc1JlY29yZEJ1dHRvbnNFbmFibGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsgaXNSZWNvcmRCdXR0b25zRW5hYmxlZCA/IFwiYnRuLWNvbG9yLXJlZCBidG4tYWxsIGJ0bi1pY29uIGJ0bi1lbmFibGVkXCIgOiBcImJ0bi1jb2xvci1ncmV5IGJ0bi1hbGwgYnRuLWljb25cIiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnBhdXNlUmVjb3JkaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1wYXVzZVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFpc1JlY29yZEJ1dHRvbnNFbmFibGVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsgaXNSZWNvcmRCdXR0b25zRW5hYmxlZCA/IFwiYnRuLWNvbG9yLWJsYWNrIGJ0bi1hbGwgYnRuLWljb24gYnRuLWVuYWJsZWRcIiA6IFwiYnRuLWNvbG9yLWdyZXkgYnRuLWFsbCBidG4taWNvblwiIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc3RvcFJlY29yZGluZ31cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tc3RvcFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IGlzRG9uZSA/IFwid2lkZ2V0LXBsYXktYXVkaW8tc2hvd1wiIDogXCJ3aWRnZXQtcGxheS1hdWRpby1oaWRlXCIgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGF1ZGlvIGNsYXNzTmFtZT17XCJhdWRpby1wbGF5ZXJcIn0gY29udHJvbHMgc3JjPXt0aGlzLnN0YXRlLmF1ZGlvVXJsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFlvdXIgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IHRoZSA8Y29kZT5hdWRpbzwvY29kZT4gZWxlbWVudC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hdWRpbz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXsgeyBcIm1hcmdpblwiIDogXCIwcHggMHB4IDBweCAxNXB4XCJ9IH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFpc0RvbmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsgaXNEb25lID8gXCJidG4tY29sb3ItYmxhY2sgYnRuLWFsbCBidG4taWNvbiBidG4tZW5hYmxlZFwiIDogXCJidG4taGlkZVwiIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnNhdmVSZWNvcmRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tcGx1c1wiID48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshaXNEb25lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17IGlzRG9uZSA/IFwiYnRuLWNvbG9yLWJsYWNrIGJ0bi1hbGwgYnRuLWljb24gYnRuLWVuYWJsZWRcIiA6IFwiYnRuLWhpZGVcIiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5kZWxldGVSZWNvcmRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5zdHJ1Y3Rpb25zXCIgc3R5bGU9eyB7IGRpc3BsYXkgOiB0aGlzLnByb3BzLnNob3dJbnN0cnVjdHMgPyBcImJsb2NrXCIgOiBcIm5vbmVcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8b2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5QcmVzcyA8c3BhbiBjbGFzc05hbWU9XCJidG4tcmVjb3JkLWNpcmNsZS1zbWFsbFwiIHN0eWxlPXsgeyBtYXJnaW46IFwiLTFweCAycHhcIiB9IH0+PC9zcGFuPiB0byByZWNvcmQgYSBtZXNzYWdlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWW91IGNhbiBwcmVzcyA8c3BhbiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLXBhdXNlXCIgc3R5bGU9eyB7IGNvbG9yOiBcInJlZFwiIH0gfT48L3NwYW4+IHRvIHBhdXNlLjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5QcmVzcyA8c3BhbiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLXN0b3BcIj48L3NwYW4+IHRvIHN0b3AuIFlvdSBjYW4gcHJlc3MgPHNwYW4gY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1wbGF5XCI+PC9zcGFuPiB0byByZXZpZXcgaXQuPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlByZXNzIDxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tcGx1c1wiIHN0eWxlPXsgeyBtYXJnaW46IFwiMHB4IDBweCAxMHB4IDBweFwiIH0gfT48L3NwYW4+IHRvIG5hbWUgdGhlIGF1ZGlvIGFuZCBzYXZlIGl0IHRvIHt0aGlzLnByb3BzLmxvY2F0aW9uVmFsfS48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9eyB7IG1hcmdpbiA6IFwiMHB4IDBweCAxNXB4IDE1cHhcIn0gfT5PciBwcmVzcyA8c3BhbiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZVwiPjwvc3Bhbj4gdG8gZGVsZXRlIHRoZSBjdXJyZW50IHJlY29yZGluZyBhbmQgc3RhcnQgYSBuZXcgb25lLjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgIH1cclxufVxyXG4iLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1JlY29yZEF1ZGlvV2lkZ2V0LmNzc1wiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==