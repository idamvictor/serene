const CryptoModal = ({ isOpen, onClose, children }) =>{
    if(!isOpen) return null

    return (
      <div
        onClick={onClose}
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-30"
      >
        {children}
      </div>
    );
}

export default CryptoModal