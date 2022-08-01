export default function LastPage({ onClickMoreToCome }) {
    return (
        <div>
            <h1 onClick={onClickMoreToCome}>more to come</h1>
            <div className="arrows">
                <h1 onClick={onClickMoreToCome}>→</h1>
                <h1 onClick={onClickMoreToCome}>→</h1>
                <h1 onClick={onClickMoreToCome}>→</h1>
                <h1 onClick={onClickMoreToCome}>→</h1>
            </div>
        </div>
    );
}
