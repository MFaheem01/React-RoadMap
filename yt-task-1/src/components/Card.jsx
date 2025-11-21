const Card = ({ cardv, isFlipped, onClick }) => {
    return (
        <div onClick={onClick} className="border border-gray-500 cursor-pointer rounded-xl w-16 py-2 px-3 m-auto h-25 flex items-center justify-center text-2xl">
            {isFlipped ? cardv : "❓"}
        </div>
    );
};

export default Card;
