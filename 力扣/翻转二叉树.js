
        const tree = {
            val: 1,
            left: { val: 2 },
            // right:{val:1}
        }
        function invertTree(root) {
            if (root !== null) {
                let queue = [root.left, root.right]
                while (queue.length) {
                    let left = queue.shift()
                    let right = queue.shift()
                    if (!left && !right) {
                        continue;
                    }
                    if (!left) {
                        left.val = right.val
                        right.val = null
                    } else if (!right) {
                        right = {
                            val: left.val,

                        }
                        left = null
                    } else {
                        let result = left.val
                        left.val = right.val
                        right.val = result
                        queue.push(left.left)
                        queue.push(right.right)
                        queue.push(left.right)
                        queue.push(right.left)
                    }

                }
            }

            return root
        };
       