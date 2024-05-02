
export interface NavigationPath {
    path: string;
    name: string;
    children?: React.ReactNode;
    toggleShowMenu?: ()=> void;
}