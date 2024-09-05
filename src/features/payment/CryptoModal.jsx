const CryptoModal = ({ isOpen, onClose, children }) =>{
    if(!isOpen) return null

    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-30">
       
          <button
            className="absolute top- z-50 right-2 text-red-500"
            onClick={onClose}
          >
            Close
          </button>
          {children}
       
      </div>
    );
}

export default CryptoModal