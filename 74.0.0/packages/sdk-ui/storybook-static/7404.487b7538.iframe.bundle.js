(self.webpackChunk_metamask_sdk_ui=self.webpackChunk_metamask_sdk_ui||[]).push([[7404,4931,6479,5645],{"./src/design-system/components/Pickers/PickerNetwork/PickerNetwork.constants.ts":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.SAMPLE_PICKERNETWORK_PROPS=exports.PICKERNETWORK_ARROW_TESTID=void 0;exports.PICKERNETWORK_ARROW_TESTID="pickernetwork-arrow",exports.SAMPLE_PICKERNETWORK_PROPS={imageSource:{uri:"https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880"},label:"Ethereum Mainnet",onPress:function onPress(){return console.log("PickerNetwork pressed")}}},"./src/design-system/components/Pickers/PickerNetwork/PickerNetwork.styles.ts":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _StyleSheet=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/StyleSheet/index.js"));exports.default=function styleSheet(params){var vars=params.vars,colors=params.theme.colors,style=vars.style;return _StyleSheet.default.create({base:Object.assign({height:32,borderRadius:16,paddingHorizontal:8,flexDirection:"row",alignItems:"center",backgroundColor:colors.background.alternative,alignSelf:"center"},style),label:{marginHorizontal:8,flexShrink:1}})}},"./src/design-system/components/Pickers/PickerNetwork/PickerNetwork.test.tsx":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js"),_PickerNetwork=(_interopRequireDefault(__webpack_require__("../devreact/node_modules/react/index.js")),_interopRequireDefault(__webpack_require__("./src/design-system/components/Pickers/PickerNetwork/PickerNetwork.tsx"))),_reactNative=__webpack_require__("./node_modules/@testing-library/react-native/build/index.js"),_PickerNetwork2=__webpack_require__("./src/design-system/components/Pickers/PickerNetwork/PickerNetwork.constants.ts"),_jsxRuntime=__webpack_require__("../devreact/node_modules/react/jsx-runtime.js");describe("PickerNetwork",(function(){it("renders correctly",(function(){var toJSON=(0,_reactNative.render)((0,_jsxRuntime.jsx)(_PickerNetwork.default,Object.assign({},_PickerNetwork2.SAMPLE_PICKERNETWORK_PROPS))).toJSON;expect(toJSON()).toMatchSnapshot()})),it("does not render Icon when onPress is not passed",(function(){var queryByTestId=(0,_reactNative.render)((0,_jsxRuntime.jsx)(_PickerNetwork.default,{label:_PickerNetwork2.SAMPLE_PICKERNETWORK_PROPS.label,imageSource:_PickerNetwork2.SAMPLE_PICKERNETWORK_PROPS.imageSource})).queryByTestId;expect(queryByTestId(_PickerNetwork2.PICKERNETWORK_ARROW_TESTID)).toBeNull()}))}))},"./src/design-system/components/Pickers/PickerNetwork/PickerNetwork.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _objectWithoutProperties2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),_TouchableOpacity=(_interopRequireDefault(__webpack_require__("../devreact/node_modules/react/index.js")),_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/TouchableOpacity/index.js"))),_hooks=__webpack_require__("./src/design-system/hooks/index.ts"),_Avatar=_interopRequireWildcard(__webpack_require__("./src/design-system/components/Avatars/Avatar/index.ts")),_Icon=_interopRequireWildcard(__webpack_require__("./src/design-system/components/Icons/Icon/index.ts")),_Text=_interopRequireWildcard(__webpack_require__("./src/design-system/components/Texts/Text/index.ts")),_PickerNetwork=__webpack_require__("./src/design-system/components/Pickers/PickerNetwork/PickerNetwork.constants.ts"),_PickerNetwork2=_interopRequireDefault(__webpack_require__("./src/design-system/components/Pickers/PickerNetwork/PickerNetwork.styles.ts")),_jsxRuntime=__webpack_require__("../devreact/node_modules/react/jsx-runtime.js"),_excluded=["onPress","style","label","imageSource"];function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}var PickerNetwork=function PickerNetwork(_ref){var onPress=_ref.onPress,style=_ref.style,label=_ref.label,imageSource=_ref.imageSource,props=(0,_objectWithoutProperties2.default)(_ref,_excluded),styles=(0,_hooks.useStyles)(_PickerNetwork2.default,{style}).styles;return(0,_jsxRuntime.jsxs)(_TouchableOpacity.default,Object.assign({style:styles.base,onPress},props,{children:[(0,_jsxRuntime.jsx)(_Avatar.default,{variant:_Avatar.AvatarVariant.Network,size:_Avatar.AvatarSize.Xs,name:label,imageSource}),(0,_jsxRuntime.jsx)(_Text.default,{style:styles.label,numberOfLines:1,variant:_Text.TextVariant.BodyMD,children:label}),onPress&&(0,_jsxRuntime.jsx)(_Icon.default,{size:_Icon.IconSize.Xs,name:_Icon.IconName.ArrowDown,testID:_PickerNetwork.PICKERNETWORK_ARROW_TESTID})]}))};exports.default=PickerNetwork;try{PickerNetwork.displayName="PickerNetwork",PickerNetwork.__docgenInfo={description:"",displayName:"PickerNetwork",props:{imageSource:{defaultValue:null,description:"Optional Network image from either a local or remote source.",name:"imageSource",required:!0,type:{name:"ImageSourcePropType"}},label:{defaultValue:null,description:"Network label to display.",name:"label",required:!0,type:{name:"string"}},onPress:{defaultValue:null,description:"Callback to trigger when picker is pressed.",name:"onPress",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/design-system/components/Pickers/PickerNetwork/PickerNetwork.tsx#PickerNetwork"]={docgenInfo:PickerNetwork.__docgenInfo,name:"PickerNetwork",path:"src/design-system/components/Pickers/PickerNetwork/PickerNetwork.tsx#PickerNetwork"})}catch(__react_docgen_typescript_loader_error){}}}]);