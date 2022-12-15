"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.DropDown = exports.RoomStatus = exports.RoomPrice = exports.RoomText = exports.DataContainerButton = exports.DataContainer = exports.RoomNumber = exports.RoomId = exports.RoomNameContainer = exports.Row = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
var Row = styled_components_1["default"].tr(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    opacity: ", ";\n    border-top: 1px solid #D4D4D4;\n\n    &:hover{\n        box-shadow: 0px 4px 30px #00000014;\n    }\n"], ["\n    opacity: ", ";\n    border-top: 1px solid #D4D4D4;\n\n    &:hover{\n        box-shadow: 0px 4px 30px #00000014;\n    }\n"])), function (props) { return props.opacity || 1; });
exports.Row = Row;
var RoomNameContainer = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    display: flex;\n    align-items: center;\n    gap: 28px;\n    padding-left: 30px;\n\n    img{\n        border-radius: 8px;\n        width: 150px;\n        height: 77px;\n        object-fit: cover;\n    }\n\n    div{\n        text-align: center;\n    }\n"], ["\n    display: flex;\n    align-items: center;\n    gap: 28px;\n    padding-left: 30px;\n\n    img{\n        border-radius: 8px;\n        width: 150px;\n        height: 77px;\n        object-fit: cover;\n    }\n\n    div{\n        text-align: center;\n    }\n"])));
exports.RoomNameContainer = RoomNameContainer;
var RoomId = styled_components_1["default"].p(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    font-size: 14px;\n    color: #799283;\n    font-family: var(--font-poppins);\n"], ["\n    font-size: 14px;\n    color: #799283;\n    font-family: var(--font-poppins);\n"])));
exports.RoomId = RoomId;
var RoomNumber = styled_components_1["default"].p(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    font-family: var(--font-poppins);\n    font-weight: 500;\n    color: #393939;\n"], ["\n    font-family: var(--font-poppins);\n    font-weight: 500;\n    color: #393939;\n"])));
exports.RoomNumber = RoomNumber;
var DataContainer = styled_components_1["default"].td(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    vertical-align: bottom;\n"], ["\n    vertical-align: bottom;\n"])));
exports.DataContainer = DataContainer;
var DataContainerButton = styled_components_1["default"].div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    vertical-align: top;\n    padding-right: 30px;\n    position: relative;\n    button{\n        background-color: transparent;\n        border: none;\n        margin-left: 60px;\n        margin-top: 15px;\n        &:focus{\n            outline: none;\n        }\n        .icon{\n            width: 25px;\n            height: 25px;\n        }\n    }\n"], ["\n    vertical-align: top;\n    padding-right: 30px;\n    position: relative;\n    button{\n        background-color: transparent;\n        border: none;\n        margin-left: 60px;\n        margin-top: 15px;\n        &:focus{\n            outline: none;\n        }\n        .icon{\n            width: 25px;\n            height: 25px;\n        }\n    }\n"])));
exports.DataContainerButton = DataContainerButton;
var RoomText = styled_components_1["default"].p(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    font-family: var(--font-poppins);\n    padding-left: 30px;\n    max-width: 300px;\n    font-weight: 500;\n    color: #393939;\n"], ["\n    font-family: var(--font-poppins);\n    padding-left: 30px;\n    max-width: 300px;\n    font-weight: 500;\n    color: #393939;\n"])));
exports.RoomText = RoomText;
var RoomPrice = styled_components_1["default"].p(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n    font-family: var(--font-poppins);\n    padding-left: 30px;\n    max-width: 300px;\n    font-weight: 600;\n    color: #212121;\n    span{\n        font-size: 14px;\n        color: #799283;\n    }\n"], ["\n    font-family: var(--font-poppins);\n    padding-left: 30px;\n    max-width: 300px;\n    font-weight: 600;\n    color: #212121;\n    span{\n        font-size: 14px;\n        color: #799283;\n    }\n"])));
exports.RoomPrice = RoomPrice;
var RoomStatus = styled_components_1["default"].p(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n    background-color: ", ";\n    color: white;\n    padding: 13px 25px;\n    border-radius: 12px;\n    text-align: center;\n    margin-left: 30px;\n"], ["\n    background-color: ", ";\n    color: white;\n    padding: 13px 25px;\n    border-radius: 12px;\n    text-align: center;\n    margin-left: 30px;\n"])), function (props) { return props.status || "blue"; });
exports.RoomStatus = RoomStatus;
var DropDown = styled_components_1["default"].div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n    display: block;\n    position: absolute;\n    background-color: white;\n    top: 90%;\n    left: 0%;\n    z-index: 2;\n    ul{\n        list-style: none;\n        margin: 0;\n        padding: 0;\n        li{\n            text-decoration: none;\n            button{\n                margin: 0;\n                width:100%;\n                padding: 10px 15px;\n                display: block;\n                border: 1px solid #D4D4D4;\n                font-family: var(--font-poppins);\n                &:hover{\n                    background-color: #EBF1EF;\n                }\n            }\n        }\n    }\n"], ["\n    display: block;\n    position: absolute;\n    background-color: white;\n    top: 90%;\n    left: 0%;\n    z-index: 2;\n    ul{\n        list-style: none;\n        margin: 0;\n        padding: 0;\n        li{\n            text-decoration: none;\n            button{\n                margin: 0;\n                width:100%;\n                padding: 10px 15px;\n                display: block;\n                border: 1px solid #D4D4D4;\n                font-family: var(--font-poppins);\n                &:hover{\n                    background-color: #EBF1EF;\n                }\n            }\n        }\n    }\n"])));
exports.DropDown = DropDown;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10;