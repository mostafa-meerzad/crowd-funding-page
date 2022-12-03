import {animate} from "framer-motion";
import {useRef, useEffect} from "react";

export function AnimatedAmount({ from, to, duration=2}) {
    const nodeRef = useRef();
    useEffect(
        () => {
            const node = nodeRef.current;
            const controls = animate(from, to, {
                duration: duration,
                ease:"easeOut",
                onUpdate(value) {
                    node.textContent = Number(value.toFixed(0)).toLocaleString();
                },
            });

            return () => controls.stop();
        },
        [from, to]
    );

    return <span ref={nodeRef} />;
}
export function AnimatedProgress({ from, to, max, duration=2}) {
    const progRef = useRef();
    useEffect(
        () => {
            const node = progRef.current;
            const controls = animate(from, to, {
                duration: duration,
                ease:"easeOut",
                onUpdate(value) {
                    node.value = value.toFixed(0);
                },
            });

            return () => controls.stop();
        },
        [from, to]
    );

    return <progress className={"info__prog"} max={max} ref={progRef} >
        <div className={"progress"}><span style={{width:"80%"}}>Progress tag</span></div>
    </progress>;
}