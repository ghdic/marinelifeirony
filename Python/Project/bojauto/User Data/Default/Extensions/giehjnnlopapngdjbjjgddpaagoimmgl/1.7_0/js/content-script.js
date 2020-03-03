/*
* @Author: Vincent Wang
* @Date:   2017-12-12 21:11:07
* @Last Modified by:   Vincent Wang
* @Last Modified time: 2017-12-21 14:02:03
*/

(function checkExtensionInstalled() {
    const installed = document.querySelector('.extension');

    if (installed) {
        installed.style.display = 'none'
    }

    localStorage.setItem('etymonline-extension-installed', 'true')
}())

