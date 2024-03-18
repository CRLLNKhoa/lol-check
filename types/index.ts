// Menu Type

export type TItemMenu = {
    title: string,
    icon: string,
    children: TChildrenItemMenu[],
    right?: boolean,
}

type TChildrenItemMenu = {
    link: string,
    title: string,
    icon?: string
}