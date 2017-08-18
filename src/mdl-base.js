import m from 'mithril';//kann hier eigtl. weg, oder in children weg

export class MdlBase {
    constructor() {
        this.classList = [];
        this.id;
    }

    oninit(vnode) {
        //??? recheck
        // if (vnode.attrs.class) {
        //     let classes = vnode.attrs.class.split(" ");
        //     this.classList = this.classList.concat(classes);
        // }

        //todo
        this.id = vnode.attrs.id ? vnode.attrs.id : null;

        vnode.attrs.color ? this.classList.push(`mdl-color-text--${vnode.attrs.color}`) : null;
    }

    view(vnode) { }
}