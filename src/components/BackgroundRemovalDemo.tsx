import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { removeBackground, loadImageFromUrl } from '@/utils/backgroundRemoval';
import { Loader2, Wand2 } from 'lucide-react';

interface BackgroundRemovalDemoProps {
  originalImageUrl: string;
  onImageProcessed: (processedImageUrl: string) => void;
}

const BackgroundRemovalDemo = ({ originalImageUrl, onImageProcessed }: BackgroundRemovalDemoProps) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [processedImageUrl, setProcessedImageUrl] = useState<string | null>(null);

  const handleRemoveBackground = async () => {
    setIsProcessing(true);
    try {
      console.log('Loading image from URL:', originalImageUrl);
      
      // Load the image
      const imageElement = await loadImageFromUrl(originalImageUrl);
      console.log('Image loaded successfully');
      
      // Remove background
      const processedBlob = await removeBackground(imageElement);
      console.log('Background removed successfully');
      
      // Create URL for the processed image
      const newImageUrl = URL.createObjectURL(processedBlob);
      setProcessedImageUrl(newImageUrl);
      onImageProcessed(newImageUrl);
      
    } catch (error) {
      console.error('Error processing image:', error);
      alert('Erro ao processar a imagem. Verifique o console para mais detalhes.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4 p-4 bg-white rounded-lg shadow-brand">
      <h3 className="text-lg font-semibold">Teste de Remoção de Fundo</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
        {/* Original Image */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-2">Imagem Original</p>
          <img 
            src={originalImageUrl} 
            alt="Original" 
            className="w-full h-48 object-cover rounded-lg border"
          />
        </div>
        
        {/* Processed Image */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-2">Sem Fundo</p>
          <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg border flex items-center justify-center">
            {processedImageUrl ? (
              <img 
                src={processedImageUrl} 
                alt="Sem fundo" 
                className="max-w-full max-h-full object-contain"
              />
            ) : (
              <p className="text-sm text-muted-foreground">Clique para processar</p>
            )}
          </div>
        </div>
      </div>
      
      <Button 
        onClick={handleRemoveBackground}
        disabled={isProcessing}
        variant="brand"
        size="lg"
      >
        {isProcessing ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Processando...
          </>
        ) : (
          <>
            <Wand2 className="mr-2 h-4 w-4" />
            Remover Fundo
          </>
        )}
      </Button>
      
      <p className="text-xs text-muted-foreground text-center max-w-md">
        Esta ferramenta usa IA para remover o fundo automaticamente. 
        O processamento acontece no seu navegador, mantendo suas fotos privadas.
      </p>
    </div>
  );
};

export default BackgroundRemovalDemo;