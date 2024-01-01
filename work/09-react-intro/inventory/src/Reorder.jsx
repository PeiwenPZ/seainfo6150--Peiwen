import './Reorder.css';
function Reorder({ onReorder }) {
    return (
        <div className="reorder">
            <button onClick={onReorder}>Reorder (+5)</button>
        </div>
    );
}

export default Reorder;