import m from 'mithril';
import { MdlBase } from './mdl-base';

export class MdlGrid extends MdlBase {
    oninit(vnode) {
        super.oninit(vnode);
        this.classList.push("mdl-grid");
    }

    view(vnode) {
        return (
            <div class={this.classList.join(" ")}>
                {vnode.children}
            </div>
        );
    }
}

export class MdlCell extends MdlBase {
    oninit(vnode) {
        super.oninit(vnode);
        this.classList.push("mdl-cell");

        vnode.attrs.col ? this.classList.push(`mdl-cell--${vnode.attrs.col}-col`) : null;
        vnode.attrs.colDesktop ? this.classList.push(`mdl-cell--${vnode.attrs.colDesktop}-col-desktop`) : null;
        vnode.attrs.colTablet ? this.classList.push(`mdl-cell--${vnode.attrs.colTablet}-col-tablet`) : null;
        vnode.attrs.colPhone ? this.classList.push(`mdl-cell--${vnode.attrs.colPhone}-col-phone`) : null;

        vnode.attrs.offset ? this.classList.push(`mdl-cell--${vnode.attrs.offset}-offset`) : null;
        vnode.attrs.offsetDesktop ? this.classList.push(`mdl-cell--${vnode.attrs.offsetDesktop}-offset-desktop`) : null;
        vnode.attrs.offsetTablet ? this.classList.push(`mdl-cell--${vnode.attrs.offsetTablet}-offset-tablet`) : null;
        vnode.attrs.offsetPhone ? this.classList.push(`mdl-cell--${vnode.attrs.offsetPhone}-offset-phone`) : null;

        vnode.attrs.order ? this.classList.push(`mdl-cell--order-${vnode.attrs.order}`) : null;
        vnode.attrs.orderDesktop ? this.classList.push(`mdl-cell--order-${vnode.attrs.orderDesktop}-desktop`) : null;
        vnode.attrs.orderTablet ? this.classList.push(`mdl-cell--order-${vnode.attrs.orderTablet}-tablet`) : null;
        vnode.attrs.orderPhone ? this.classList.push(`mdl-cell--order-${vnode.attrs.orderPhone}-phone`) : null;

        vnode.attrs.hideDesktop ? this.classList.push(`mdl-cell--hide-desktop`) : null;
        vnode.attrs.hideTablet ? this.classList.push(`mdl-cell--hide-tablet`) : null;
        vnode.attrs.hidePhone ? this.classList.push(`mdl-cell--hide-phone`) : null;

        vnode.attrs.stretch ? this.classList.push(`mdl-cell--stretch`) : null;
        vnode.attrs.top ? this.classList.push(`mdl-cell--top`) : null;
        vnode.attrs.middle ? this.classList.push(`mdl-cell--middle`) : null;
        vnode.attrs.bottom ? this.classList.push(`mdl-cell--bottom`) : null;
    }

    view(vnode) {
        return (
            <div class={this.classList.join(" ")}>
                {vnode.children}
            </div>
        )
    }
}