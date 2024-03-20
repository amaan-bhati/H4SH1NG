var buildTree = function (inorder, postorder) {

    function callDFS(arr) {
        if (!arr.length) return null;
        const val = postorder.pop();
        const idx = arr.indexOf(val);
        const node = new TreeNode(val);
        node.right = callDFS(arr.slice(idx + 1));
        node.left = callDFS(arr.slice(0, idx));
        return node;
    }

    return callDFS(inorder);
};
