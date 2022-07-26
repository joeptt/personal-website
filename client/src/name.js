export default function Name() {
    const onMouseEnter = (e) => {
        e.target.classList.add("hoverSpan");
    };

    const onMouseLeave = (e) => {
        setTimeout(() => {
            e.target.classList.remove("hoverSpan");
        }, 1000);
    };

    return (
        <div className="name-job-wrapper">
            <h1>
                <span onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    J
                </span>
                <span onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    O
                </span>
                <span onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    E&nbsp;
                </span>
                <span onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    P
                </span>
                <span onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    E
                </span>
                <span onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    T
                </span>
                <span onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    E
                </span>
                <span onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    R
                </span>
                <span onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    E
                </span>
                <span onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    I
                </span>
                <span onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    T
                </span>
            </h1>
            <h3>Full Stack Web Developer</h3>
        </div>
    );
}
