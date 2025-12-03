'use client'
import React, {useEffect} from 'react';

const ChatWeb = () => {
    useEffect(() => {

        const loadChatScript = () => {
            if (document.getElementById('script-infochat')) return;


            const asksuite = document.createElement('script');
            asksuite.id = 'script-infochat';
            asksuite.src = 'https://cdn.asksuite.com/infochat.js?dataConfig=https://control.asksuite.com/api/companies/grand-residences-resort';
            asksuite.defer = true;
            asksuite.async = true;

            // Función para esperar a que aparezca un elemento en el DOM
            function waitForElement(selector: string): Promise<Element> {
                return new Promise(resolve => {
                    if (document.querySelector(selector)) {
                        return resolve(document.querySelector(selector)!);
                    }

                    const observer = new MutationObserver(() => {
                        if (document.querySelector(selector)) {
                            observer.disconnect();
                            resolve(document.querySelector(selector)!);
                        }
                    });

                    observer.observe(document.body, {
                        childList: true,
                        subtree: true
                    });
                });
            }

            // Manejador para cuando el script se carga
            asksuite.onload = () => {
                setTimeout(() => {
                    waitForElement('.infochat_floatmain').then(element => {
                        element.addEventListener("click", () => {
                            window.dataLayer = window.dataLayer || [];
                            window.dataLayer.push({
                                'event': 'click_chat',
                            });
                        });
                    });
                }, 1000);
            };

            // Agregar el script al head
            document.head.appendChild(asksuite);
        }


        const timer = setTimeout(loadChatScript, 4500);

        // Cleanup: remover el script cuando el componente se desmonte
        return () => {
            clearTimeout(timer);
            const scriptElement = document.getElementById('script-infochat');
            if (scriptElement) {
                scriptElement.remove();
            }
        };
    }, []);

    return (
        <div>
            {/* El chat se inyectará automáticamente por el script */}
        </div>
    );
};

export default ChatWeb;