import { useState, useEffect } from 'react';

interface CountryInfo {
  country: string;
  language: 'es' | 'pt';
  isBrazil: boolean;
  isUruguay: boolean;
}

export const useCountryDetection = (): CountryInfo => {
  const [countryInfo, setCountryInfo] = useState<CountryInfo>({
    country: 'unknown',
    language: 'es',
    isBrazil: false,
    isUruguay: false,
  });

  useEffect(() => {
    const detectCountry = async () => {
      try {
        // Intentar detectar por geolocalización si está disponible
        if ('geolocation' in navigator) {
          navigator.geolocation.getCurrentPosition(
            async (position) => {
              try {
                // Usar un servicio de geocodificación inversa
                const response = await fetch(
                  `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&localityLanguage=en`
                );
                const data = await response.json();
                const country = data.countryCode;
                
                updateCountryInfo(country);
              } catch (error) {
                console.warn('Error en geocodificación:', error);
                detectByTimezone();
              }
            },
            () => {
              // Si no se permite geolocalización, usar timezone
              detectByTimezone();
            },
            { timeout: 5000 }
          );
        } else {
          detectByTimezone();
        }
      } catch (error) {
        console.warn('Error detectando país:', error);
        detectByTimezone();
      }
    };

    const detectByTimezone = () => {
      try {
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        
        if (timezone.includes('America/Sao_Paulo') || 
            timezone.includes('America/Recife') || 
            timezone.includes('America/Manaus') ||
            timezone.includes('America/Fortaleza')) {
          updateCountryInfo('BR');
        } else if (timezone.includes('America/Montevideo')) {
          updateCountryInfo('UY');
        } else {
          // Detectar por idioma del navegador como fallback
          const language = navigator.language || navigator.languages?.[0] || 'es';
          if (language.startsWith('pt')) {
            updateCountryInfo('BR');
          } else {
            updateCountryInfo('UY');
          }
        }
      } catch (error) {
        console.warn('Error detectando por timezone:', error);
        updateCountryInfo('UY'); // Default a Uruguay
      }
    };

    const updateCountryInfo = (countryCode: string) => {
      const isBrazil = countryCode === 'BR';
      const isUruguay = countryCode === 'UY';
      
      setCountryInfo({
        country: countryCode,
        language: isBrazil ? 'pt' : 'es',
        isBrazil,
        isUruguay,
      });
    };

    detectCountry();
  }, []);

  return countryInfo;
};