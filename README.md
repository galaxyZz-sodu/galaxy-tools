# Galaxy-tools
## 使用方法
<strong>使用版本：vue3</strong>

1. 下载插件 
    ```javascript
    npm i galaxyzz-tools
    ```
2. 全局引用

    <strong>main.js</strong>

    ```javascript
    import { createApp } from 'vue';
    import App from './App.vue';
    import galaxyTools from 'galaxyzz-tools';
    const app = createApp(App);
    app.config.globalProperties.galaxyTools = galaxyTools;
    app.mount('#app')
    ```
3. 在<strong>.vue</strong>文件中使用
   
    ```javascript
    <script>
        import { getCurrentInstance } from 'vue'
        export default {
            name: 'App',
            setup() {
                const { proxy } = getCurrentInstance();

                const { throttle, add } = proxy.galaxyTools;

                const test = () => {
                    console.log(add(1, 5))
                }

                const throttleTest = throttle(test, 2000)

                return {
                    throttleTest,
                }
            }
        }
    </script>
    
    ```

4. 在<strong>.js</strong>文件中使用

    ```javascript
    import galaxyTools from 'galaxyzz-tools'

    export default function numAdd(a, b) {
        return galaxyTools.add(a, b);
    }
    ```
