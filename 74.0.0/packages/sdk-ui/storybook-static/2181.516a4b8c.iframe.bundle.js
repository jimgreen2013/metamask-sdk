"use strict";(self.webpackChunk_metamask_sdk_ui=self.webpackChunk_metamask_sdk_ui||[]).push([[2181],{"./src/design-system/components/Tags/TagUrl/README.md":module=>{module.exports='# TagUrl\n\nTagUrl is a component used to display Dapp information within a container.\n\n## Props\n\nThis component extends `ViewProps` from React Native\'s [View Component](https://reactnative.dev/docs/view).\n\n### `imageSource`\n\nFavicon image from either a local or remote source.\n\n| <span style="color:gray;font-size:14px">TYPE</span>                   | <span style="color:gray;font-size:14px">REQUIRED</span> |\n| :-------------------------------------------------------------------- | :------------------------------------------------------ |\n| [ImageSourcePropType](https://reactnative.dev/docs/image#imagesource) | Yes                                                     |\n\n### `label`\n\nLabel within the tag.\n\n| <span style="color:gray;font-size:14px">TYPE</span> | <span style="color:gray;font-size:14px">REQUIRED</span> |\n| :-------------------------------------------------- | :------------------------------------------------------ |\n| string                                              | Yes                                                     |\n\n### `cta`\n\nObject that contains the label and callback of the call to action.\n\n| <span style="color:gray;font-size:14px">TYPE</span> | <span style="color:gray;font-size:14px">REQUIRED</span> |\n| :-------------------------------------------------- | :------------------------------------------------------ |\n| [TagUrlCta](./TagUrl.types.ts#L3)                   | No                                                      |\n\n```javascript\n// Replace import with relative path.\nimport TagUrl from \'app/component-library/components/Tags/TagUrl\';\n\n<TagUrl\n  url={IMAGE_URL}\n  label={TAG_LABEL}\n  cta={{ label: CTA_LABEL, onPress: ONPRESS_HANDLER }}\n/>;\n```\n'}}]);