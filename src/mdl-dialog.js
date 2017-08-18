import m from 'mithril';
import { MdlBase } from './mdl-base';
import { MdlSpinner } from './mdl-spinner';

import 'dialog-polyfill/dialog-polyfill.css';
import * as dialogPolyfill from 'dialog-polyfill/dialog-polyfill.js';

export class MdlDialog extends MdlBase {
    oninit(vnode) { 
        super.oninit(vnode);
        this.vnode = vnode; 
    }

    onok() {
        this.close();
    }

    close() {
        this.vnode.dom.close();
    }

    view(vnode) {
        return (
            <dialog class="mdl-dialog">
                <h4 class="mdl-dialog__title" style="padding:10px; text-align:center;"></h4>
                <div class="mdl-dialog__content" style="text-align:center;" hidden>
                    <div class="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active"></div>
                </div>
                <div class="mdl-dialog__actions" hidden>
                    <button type="button" class="mdl-button ok" id="mdlDialogOkButton">
                        {vnode.attrs.okText ? vnode.attrs.okText : "ok"}
                    </button>
                    <button type="button" class="mdl-button close" id="mdlDialogCancelButton">
                        {vnode.attrs.cancelText ? vnode.attrs.cancelText : "close"}
                    </button>
                </div>
            </dialog>
        )
    }
}


export class MdlDialogService {
    constructor() {
    }

    showConfirm(title, description, showOkCancel, onOk, onCancel) {
        //console.log("mdlDialogService.show");
        let dialog = document.querySelector('dialog');
        dialogPolyfill.registerDialog(dialog);//only if not chrome?

        let dialogTitle = dialog.querySelector(".mdl-dialog__title");
        let dialogContent = dialog.querySelector(".mdl-dialog__content");
        let dialogActions = dialog.querySelector(".mdl-dialog__actions");

        dialogTitle.innerHTML = title;
        dialogContent.setAttribute("hidden", "hidden");
        dialogActions.setAttribute("hidden", "hidden");


        if (description) {
            dialogContent.removeAttribute("hidden");
            m.render(dialogContent, <span>{description}</span>);
        }

        if (showOkCancel) {
            dialog.querySelector(".mdl-dialog__actions").removeAttribute("hidden");

            dialog.querySelector('.ok').addEventListener('click', () => {
                this.hide();
                onOk ? onOk() : null;
            });

            dialog.querySelector('.close').addEventListener('click', () => {
                this.hide();
                onCancel ? onCancel() : null;
            });
        }

        dialog.showModal();
    }

    showLoader(title) {
        //console.log("mdlDialogService.show");
        let dialog = document.querySelector('dialog');
        dialogPolyfill.registerDialog(dialog);

        let dialogTitle = dialog.querySelector(".mdl-dialog__title");
        let dialogContent = dialog.querySelector(".mdl-dialog__content");
        let dialogActions = dialog.querySelector(".mdl-dialog__actions");

        dialogTitle.innerHTML = title;
        dialogContent.setAttribute("hidden", "hidden");
        dialogActions.setAttribute("hidden", "hidden");

        dialogContent.removeAttribute("hidden");
        m.render(dialogContent, <MdlSpinner active singlecolor />);

        componentHandler.upgradeElement(document.querySelector(".mdl-js-spinner"));//hack for spinner showing correctly 
        dialog.showModal();
    }

    hide() {
        let dialog = document.querySelector('dialog');

        if (dialog.hasAttribute("open")) {
            dialog.close();

            let oldOkBtn = dialog.querySelector("#mdlDialogOkButton");
            let newOkBtn = oldOkBtn.cloneNode(true);
            oldOkBtn.parentNode.replaceChild(newOkBtn, oldOkBtn);

            let oldCancelBtn = dialog.querySelector("#mdlDialogCancelButton");
            let newCancelBtn = oldCancelBtn.cloneNode(true);
            oldCancelBtn.parentNode.replaceChild(newCancelBtn, oldCancelBtn);
        }
    }
};