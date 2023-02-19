import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'songTime',
  standalone: true,
})
export class SongPipe implements PipeTransform {
  transform(seconds: number): string {
    const date: string = new Date(Number(seconds) * 1000).toISOString();
    return date.slice(14, 19);
  }
}

@Pipe({
  name: 'songIframe',
  standalone: true,
})
export class SongIframePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(youtubeUrl: string) {
    const urlParams: URL = new URL(youtubeUrl);
    const youtubeId: string = urlParams.searchParams.get('v') || '';
    const iframe: string = `<iframe style="border-radius: 7px 0 0 7px; border: none; margin: 0px;" width="100%" height="100%" src="https://www.youtube.com/embed/${youtubeId}" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    return this.sanitizer.bypassSecurityTrustHtml(iframe);
  }
}
