function ReasonsToJoinCards_Icons({SelectedIcon}){
    return(
            <div>
                {SelectedIcon === "Heart" && (
                    <svg
                        width="100"
                        height="100"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <defs>
                            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" style={{ stopColor: "#ff4d4d", stopOpacity: 1 }} />
                                <stop offset="100%" style={{ stopColor: "#990066", stopOpacity: 1 }} />
                            </linearGradient>
                        </defs>
                        <path
                            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                            fill="url(#grad1)"
                        />
                    </svg>
                )}
                {SelectedIcon === "Handshake" && (
                    <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" width='110' height='110' textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 512 274.872">
                        <path fillRule="nonzero" d="M387.247 45.769c5.633-10.213 16.879-15.166 31.203-15.183l54.009-.005c23.733-.008 42.351 10.153 39.19 36.776L499.813 189.8c-1.731 21.562-12.081 38.996-35.981 38.067l-48.321.02c-14.878.667-24.696-8.088-30.289-20.681h-17.843c8.83 25.793-19.153 47.24-42.287 37.635-11.295 11.791-25.232 17.311-41.161 11.724-13.799 15.294-30.721 18.955-49.439 10.129-14.556 11.411-36.339 10.875-50.265-1.572-6.149-5.498-10.29-12.558-14.947-20.679l-26.424-46.473h-16.823c-3.189 16.907-13.154 29.566-33.782 29.281l-45.078.02c-26.154 3.983-34.801-20.443-37.084-41.678L.695 69.664c-1.994-13.582.383-23.35 6.093-30.204 6.191-7.432 16.353-10.716 25.803-10.716l56.973.04c9.738-.104 18.182 1.557 24.722 5.781l-.018.028c5.858 3.787 9.945 9.164 11.84 16.524h34.665c9.742-6.57 18.863-11.737 28.956-14.881 9.904-3.082 20.525-4.169 33.215-2.65 13.601-16.185 18.698-24.995 40.955-30.747 19.498-5.045 45.334-3.383 64.41 5.132 10.674 4.76 20.449 11.61 30.008 18.309 9.516 6.666 19.237 13.067 28.93 19.489z"/>
                        <path fill="#FDD0BF" fillRule="nonzero" d="M349.948 200.95l-61.7-111.291c-6.945-11.626-13.22-11.926-19.275-8.318-4.297 2.561-8.819 6.692-13.341 10.826-6.158 5.628-12.44 10.749-18.872 16.048-7.737 6.148-16.444 9.449-24.698 10.133-17.859 1.48-33.17-9.227-34.709-27.727a6.263 6.263 0 011.815-4.946l33.802-40.222c-18.517-.256-31.797 6.858-46.765 17.106a6.227 6.227 0 01-3.529 1.088l-35.488.016v121.844h19.12a6.275 6.275 0 015.584 3.412l28.27 49.302c4.14 7.22 7.794 13.471 12.398 17.587 8.886 7.943 23.505 8.839 33.241 1.775l-18.418-34.463a6.25 6.25 0 0111.027-5.883l20.021 37.462c13.911 7.071 25.446 5.26 35.998-6.266l-28.846-45.288a6.25 6.25 0 011.912-8.625 6.25 6.25 0 018.625 1.913l30.408 47.736c11.68 4.736 20.912.915 29.308-7.775l-27.549-51.858a6.272 6.272 0 0111.076-5.883l28.498 53.646c9.795 5.686 24.459.192 27.945-10.573 3.036-9.378-2.157-14.096-5.858-20.776z"/>
                        <path fill="#FEDECF" fillRule="nonzero" d="M342.944 188.817l-54.696-99.158c-6.945-11.626-13.22-11.926-19.275-8.318-4.297 2.561-8.819 6.692-13.341 10.826-6.158 5.628-12.44 10.749-18.872 16.048-7.737 6.148-16.444 9.449-24.698 10.133-17.859 1.48-33.17-9.227-34.709-27.727a6.263 6.263 0 011.815-4.946l25.038-31.458c-18.517-.257-31.797 6.858-46.765 17.106a6.227 6.227 0 01-3.529 1.088l-17.267.016 3.904 113.08h5.759a6.275 6.275 0 015.584 3.412l28.27 49.302c6.134 10.698 28.734 22.29 42.044 12.632l-14.823-27.733a6.25 6.25 0 0111.027-5.883l15.835 30.211c13.911 7.07 25.445 5.26 35.998-6.266l-24.66-38.037a6.25 6.25 0 011.912-8.625 6.25 6.25 0 018.625 1.913l26.314 40.644c11.681 4.736 20.912.914 29.308-7.775l-23.455-44.766a6.272 6.272 0 0111.076-5.883l21.494 41.512c9.795 5.686 24.458.192 27.945-10.572 3.036-9.378-2.157-14.096-5.858-20.776z"/>
                        <path fill="#FDD0BF" fillRule="nonzero" d="M223.049 52.868l-32.874 39.118c2.008 10.263 11.019 14.684 20.858 13.869 12.171-1.007 19.965-9.106 28.836-16.437 7.467-6.165 14.407-13.874 22.683-18.809 12.235-7.295 24.404-7.538 36.447 12.661l61.724 111.332h21.066l1.168-136.634-22.054-14.728c-14.799-9.872-30.311-22.838-47.589-27.375-21.057-5.534-50.843-5.539-67.866 10.351-7.474 8.896-14.931 17.766-22.399 26.652z"/>
                        <path fill="#FEDECF" fillRule="nonzero" d="M190.175 91.986c2.008 10.263 11.019 14.684 20.858 13.869 12.171-1.007 19.965-9.106 28.836-16.437 7.467-6.165 14.407-13.874 22.683-18.809 12.235-7.295 24.404-7.538 36.447 12.661l61.724 111.332h3.538l.828-96.813c7.083-26.438-5.997-66.157-63.694-76.806-40.676-7.517-67.552 19.036-111.22 71.003z"/>
                        <path fill="#ED5575" d="M393.472 63.701c-.254-15.563 8.397-22.907 24.978-22.931h53.161c20.21-.206 32.131 6.6 29.893 25.388l-11.875 122.843c-1.542 19.178-9.611 29.454-25.798 28.663h-48.247c-10.581.687-17.745-5.458-22.112-17.198V63.701z"/>
                        <path d="M442.328 156.294c6.498 0 11.767 5.269 11.767 11.769 0 6.498-5.269 11.767-11.767 11.767-6.501 0-11.769-5.269-11.769-11.767 0-6.5 5.268-11.769 11.769-11.769z"/>
                        <path fill="#576D7A" d="M10.849 68.475l9.318 115.442c2.763 26.983 12.454 35.676 26.402 33.132h45.066c17.531.565 24.838-10.976 25.367-30.543V58.639c-1.056-14.886-11.74-19.858-27.437-19.671H32.592c-15.733.579-24.958 8.257-21.743 29.507z"/>
                        <path d="M67.956 156.294c6.498 0 11.767 5.269 11.767 11.769 0 6.498-5.269 11.767-11.767 11.767-6.501 0-11.769-5.269-11.769-11.767 0-6.5 5.268-11.769 11.769-11.769z"/>
                    </svg>
                )}
                {SelectedIcon === "Monitor" && (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 150" width="160" height="160" style={{marginBottom:'-45px',marginRight:'-40px'}}>
                        <rect x="30" y="20" width="100" height="70" rx="5" ry="5" fill="url(#gradient)" stroke="purple" strokeWidth="2"/>
                        <rect x="65" y="90" width="30" height="5" fill="purple"/>
                        <ellipse cx="80" cy="100" rx="20" ry="5" fill="purple"/>
                        <rect x="110" y="55" width="30" height="50" rx="5" ry="5" fill="url(#gradient)" stroke="purple" strokeWidth="2" transform="rotate(10 125 80)"/>
                        <defs>
                            <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
                                <stop offset="0%" stopColor="pink"/>
                                <stop offset="100%" stopColor="purple"/>
                            </linearGradient>
                        </defs>
                    </svg>
                )}
                {SelectedIcon === "StarAndHand" && (
                    <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 512 485.95" width="100" height="100" style={{marginBottom: '3px',marginRight:'2px'}}>
                        <path fill="white" d="m342.29 92.77 22.44 52.57 57.18 5.12c2.3.23 4.3 1.37 5.68 3.01l.23.31a8.46 8.46 0 0 1 1.76 5.78l-.03.32a8.57 8.57 0 0 1-.88 2.95l-.13.24c-.41.75-.94 1.43-1.55 2.02l-43.49 37.99 12.81 56.09c.46 2.23-.01 4.45-1.14 6.25a8.51 8.51 0 0 1-8.71 3.86 8.242 8.242 0 0 1-3.2-1.25l-48.9-29.24-49.3 29.47c-2 1.16-4.29 1.42-6.35.9a8.554 8.554 0 0 1-5.25-3.89l-.17-.32a8.522 8.522 0 0 1-.83-5.99l12.76-55.88-43.17-37.69a8.556 8.556 0 0 1-2.9-5.88c-.14-2.16.54-4.39 2.1-6.17.78-.89 1.69-1.58 2.68-2.06 1.02-.5 2.14-.78 3.28-.85l56.77-5.09 22.52-52.71a8.566 8.566 0 0 1 4.68-4.58c2.01-.81 4.36-.86 6.53.07l.24.11c.96.44 1.79 1.03 2.47 1.71l.27.29c.66.74 1.19 1.57 1.56 2.46l.04.08zM0 259.96h106.66l-4.27 184.64H0V259.96zm123.5 169.73 3.57-153.26 68.93 1.61c29.1 5.92 57.95 22.44 86.75 41.53l53.54 1.24c24.2 2.03 36.32 26.88 12.4 42.47-19.1 13.33-43.85 11.98-69.18 9.11-17.49-1.27-18.8 22.25-.53 22.75 6.32.64 13.26-.68 19.28-.55 31.69.71 57.94-4.74 74.49-29.4l8.47-18.56L461.78 309c40.16-12.19 67.51 30.16 37.48 58.46-58.66 40.63-118.64 73.79-179.79 100.27-44.57 25.71-88.49 23.78-131.84-3.07l-64.13-34.97zm56.4-320.68c-4.09-1.72-6.01-6.44-4.29-10.53 1.72-4.09 6.44-6.01 10.53-4.29l33.57 14.22c4.09 1.72 6.01 6.44 4.29 10.53a8.056 8.056 0 0 1-10.54 4.29l-33.56-14.22zm34.13-52.31c-3.13-3.16-3.12-8.26.03-11.39 3.16-3.13 8.26-3.12 11.39.03l25.64 25.92c3.13 3.15 3.12 8.25-.03 11.38-3.16 3.14-8.26 3.12-11.39-.03L214.03 56.7zm51.46-35.44c-1.69-4.11.28-8.81 4.39-10.5 4.11-1.69 8.81.27 10.5 4.38l13.86 33.72a8.044 8.044 0 0 1-4.38 10.5c-4.11 1.69-8.82-.27-10.51-4.38l-13.86-33.72zm217.09 72.93c4.09-1.72 8.81.2 10.53 4.29 1.72 4.09-.19 8.81-4.29 10.53l-33.56 14.22c-4.09 1.72-8.81-.2-10.53-4.29a8.028 8.028 0 0 1 4.29-10.53l33.56-14.22zm-39.31-48.85c3.14-3.15 8.24-3.16 11.39-.03 3.15 3.13 3.17 8.23.03 11.39l-25.64 25.91c-3.13 3.15-8.23 3.17-11.38.03-3.15-3.13-3.17-8.23-.04-11.38l25.64-25.92zm-54.93-30.2c1.69-4.11 6.4-6.07 10.5-4.38 4.11 1.69 6.08 6.39 4.39 10.5l-13.86 33.72a8.044 8.044 0 0 1-10.5 4.38c-4.11-1.69-6.08-6.39-4.39-10.5l13.86-33.72zm-62.3-7.07c0-4.45 3.61-8.07 8.07-8.07 4.46 0 8.07 3.62 8.07 8.07v36.46c0 4.45-3.61 8.07-8.07 8.07-4.46 0-8.07-3.62-8.07-8.07V8.07z"/>
                    </svg>
                
                )}
            </div>
    )
}

export default ReasonsToJoinCards_Icons