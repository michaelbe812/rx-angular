import { IsrServiceInterface, IsrState } from '@rx-angular/isr/models';

export function addIsrDataBeforeSerialized(
  isrService: IsrServiceInterface,
  doc: Document
): () => Promise<void> {
  return () => addISRDataToBody(doc, isrService.getState());
}

// append script with revalidate and errors data for the current route
function addISRDataToBody(
  doc: Document,
  { revalidate, errors, extra }: IsrState
): Promise<void> {
  return new Promise<void>((resolve) => {
    const script = doc.createElement('script');
    script.id = 'isr-state';
    script.setAttribute('type', 'application/json');

    let toBeSerialized: any = { revalidate };

    if (errors.length) toBeSerialized = { ...toBeSerialized, errors };
    if (Object.keys(extra).length)
      toBeSerialized = { ...toBeSerialized, extra };

    script.textContent = JSON.stringify(toBeSerialized);
    doc.body.appendChild(script);
    resolve();
  });
}
