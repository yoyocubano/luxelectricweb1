import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { I18nPipe } from '../../pipes/i18n.pipe';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, I18nPipe],
})
export class GamesComponent { }
