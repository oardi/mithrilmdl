import m from 'mithril';
import { MdlBase } from './mdl-base';

export class MdlSnackBar extends MdlBase {
    oninit(vnode) {
        super.oninit(vnode);
        this.classList.push("mdl-js-snackbar", "mdl-snackbar");
    }

    view(vnode) {
        return (
            <div class={this.classList.join(" ")}>
                <div class="mdl-snackbar__text"></div>
                <button class="mdl-snackbar__action" type="button"></button>
            </div>
        )
    }
}

export class MdlSnackBarService {
    constructor() { }

    show(message, timeout, actionText, actionHandler) {
        let snackBarContainer = document.querySelector('.mdl-snackbar');
        let data = {
            message: message ? message : "info",
            timeout: timeout ? timeout : 2000,
            actionHandler: () => {
                snackBarContainer.MaterialSnackbar.hideSnackbar ? snackBarContainer.MaterialSnackbar.hideSnackbar() : null;
                actionHandler ? actionHandler() : null;
            },
            actionText: actionText ? actionText : 'ok'
        };

        snackBarContainer.MaterialSnackbar.showSnackbar(data);
    }
};