class FsNode {
    name: string;
    isDirectory: boolean;
    constructor(name: string, isDirectory:boolean) {
        this.name = name;
        this.isDirectory = isDirectory;
    }
};

class Directory extends FsNode {
    children: Map<string, FsNode>;

    constructor(name: string) {
        super(name, true);
        this.children = new Map();
    }
}

class FsFile extends FsNode {
    content: string;
    constructor(name: string, content = "") {
        super(name, false);
        this.content = content;
    }
}

class FFileSystem { // TODO: Change to FilesSystem -> That's how the leetcode problem goes!
    root: Directory;
    constructor() {
        this.root = new Directory("");
    }

    splitPath(path: string): string[] {
        if (path === "/") return []
        if (!path.startsWith("/")) throw new Error("Path must be absolute");
        
        const arr = path.split("/");
        return arr.slice(1);
    }
    ls(path: string): string[] {
        const pathArr = this.splitPath(path);
        let current: FsNode = this.root;
        
        while (pathArr.length) {
            if (!current.isDirectory) break;
            
            let currentFsNode = current as Directory;
            let childName = pathArr.shift()!;
            if (currentFsNode.children.has(childName)) {
                current = currentFsNode.children.get(childName)!;
            }
        }
        
        if (current.isDirectory) {
            let currentFsNode = current as Directory;
            return [...currentFsNode.children.keys()].sort();
        }
        
        return [current.name];
    }

    mkdir(path: string, ret = false) {
        if (path === "/") return;

        const pathArr = this.splitPath(path);
        let current: FsNode = this.root;

        while(pathArr.length) {
            if (!current.isDirectory) break;
            
            let currentFsNode = current as Directory;
            let childName = pathArr.shift()!;
            
            if (currentFsNode.children.has(childName)) {
                current = currentFsNode.children.get(childName)!;
            } else {
                const newDir = new Directory(childName);
                currentFsNode.children.set(childName, newDir);
                current = newDir;
            }
        }

    }

    addContentToFile(filePath: string, content: string): void {
        const pathArr = this.splitPath(filePath);
        let current: FsNode = this.root;

        const file = pathArr.pop()!;
        while(pathArr.length) {
            if (!current.isDirectory) break;
            
            let currentFsNode = current as Directory;
            let childName = pathArr.shift()!;
            
            if (currentFsNode.children.has(childName)) {
                current = currentFsNode.children.get(childName)!;
            } else {
                const newDir = new Directory(childName);
                currentFsNode.children.set(childName, newDir);
                current = newDir;
            }
        }

        if (!current.isDirectory) throw new Error("Not a directory");
        const parent = current as Directory;

        if (parent.children.has(file)) {
            const node = parent.children.get(file) as FsFile;
            if (node.isDirectory) throw new Error("Is a directory");
            node.content = node.content + content;
        } else {
            const node: FsFile = new FsFile(file, content);
            parent.children.set(file, node);
        }
    }

    readContentFromFile(filePath: string): string {
        const pathArr = this.splitPath(filePath);
        let current: FsNode = this.root;

        const file = pathArr.pop()!;
        while(pathArr.length) {
            if (!current.isDirectory) break;
            
            let currentFsNode = current as Directory;
            let childName = pathArr.shift()!;
            
            if (currentFsNode.children.has(childName)) {
                current = currentFsNode.children.get(childName)!;
            } else {
                const newDir = new Directory(childName);
                currentFsNode.children.set(childName, newDir);
                current = newDir;
            }
        }

        if (!current.isDirectory) throw new Error("Not a directory");
        const parent = current as Directory;

        if (parent.children.has(file)) {
            const node = parent.children.get(file) as FsFile;
            return node.content;
        } else {
            throw new Error("File not found");
        }
    }
}
