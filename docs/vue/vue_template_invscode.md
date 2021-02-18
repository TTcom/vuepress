### vue_template_invscode

```
文件>首选项>用户片段>输入vue>点击vue
讲一下代码拷入文件中
```
```json
"Print to console": {
        "prefix": "log",
        "body": [
            "console.log('$1');",
            "$2"
        ],
        "description": "Log output to console"
    },
    "Create vue template": {
        "prefix": "vue",
        "body": [
			"<template>",
			"  <div></div>",
            "</template>",
            "<script>",
            "export default {",
            "  name: ' ',",
            "  data() {",
            "    return {",
            "    }",
            "  }",
            "}",
            "</script>",
            "<style lang=\"${2:scss}\" scoped></style>"
        ],
        "description": "Create vue template"
    }

```