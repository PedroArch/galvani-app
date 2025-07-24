import './NavigationButtons.css';

interface NavigationButtonsProps {
  onPrevious?: () => void;
  onNext?: () => void;
  showPrevious?: boolean;
  showNext?: boolean;
}

export function NavigationButtons({ 
  onPrevious, 
  onNext, 
  showPrevious = true, 
  showNext = true 
}: NavigationButtonsProps) {
  return (
    <div className="navigation-buttons">
      {showPrevious && (
        <button 
          className="nav-button nav-button-previous" 
          onClick={onPrevious}
        >
          Anterior
        </button>
      )}
      {showNext && (
        <button 
          className="nav-button nav-button-next" 
          onClick={onNext}
        >
          Próximo
        </button>
      )}
    </div>
  );
}
