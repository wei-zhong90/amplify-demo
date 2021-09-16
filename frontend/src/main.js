import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';

Amplify.configure(aws_exports);

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
