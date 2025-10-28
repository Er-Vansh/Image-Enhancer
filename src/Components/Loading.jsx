const Loading = () => {
    return (
        <>
            <div className="flex items-center justify-center h-80 bg-gray-50">
                <div className="animate-spin border-4 border-t-transparent m-10 h-10 w-10 scale-200 rounded-full border-indigo-600"></div>
            </div>
        </>
    )
}

export default Loading;