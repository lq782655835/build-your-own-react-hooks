const React = (() => {
    // 闭包变量
    let hooks = []
    let idx = 0
    return {
        render: (Component) => {
            let comp = Component()
            idx = 0
            return comp
        },
        useState: (initVal) => {
            const state = hooks[idx] || initVal
            const _idx = idx
            const setState = newVal => hooks[_idx] = newVal
            idx++

            return [state, setState]
        }
    }
})()

const { useState } = React

// example

function Count() {
    const [count, setCount] = useState(0)
    const add = () => setCount(count + 1)
    return <div>{count}</div>
}
