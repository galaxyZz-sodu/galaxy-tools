// import { getCurrentInstance } from "vue";

// const {proxy} = getCurrentInstance();

// const { add } = proxy.galaxyTools;

import galaxyTools from 'galaxyzz-tools'

export default function numAdd(a, b) {
    console.log(galaxyTools.add(a, b));
}