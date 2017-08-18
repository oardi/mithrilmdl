import m from 'mithril';
import { MdlBase } from './mdl-base';

export class MdlFooter extends MdlBase {
    oninit(vnode) {
        super.oninit(vnode);
        vnode.attrs.mini ? this.classList.push("mdl-mini-footer") : null;
    }

    view(vnode) {
        return (
            <footer class={this.classList.join(" ")}>
                {vnode.children}
            </footer>
        )
    }
}

//mdl-mini-footer
//mdl-mini-footer__left-section
//mdl-mini-footer__right-section
{/* <ul class="mdl-mini-footer__link-list">
      ...
    </ul> */}
//button "mdl-mini-footer__social-btn"


//mdl-mega-footer

//mdl-mega-footer__top-section
//mdl-mega-footer__middle-section
//mdl-mega-footer__bottom-section

//mdl-mega-footer__left-section
//mdl-mega-footer__right-section

//mdl-mega-footer__drop-down-section

//  <div class="mdl-logo">
//     </div>
//     <ul class="mdl-mega-footer__link-list">
//       ...
//     </ul>

//mdl-mega-footer__social-btn

//"mdl-mega-footer__heading