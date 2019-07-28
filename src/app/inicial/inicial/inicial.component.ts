import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { MenuItem } from 'primeng/components/common/menuitem';
import { InicialServiceService } from './inicial-service.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { Eventos } from './Eventos.model';
import { View } from './view.model';
import { Cor } from './cor.model';
import { GrupoDeViews } from './grupo-views.model';
import { Dashboard } from './dashboard.model';
import { GridsterItemVO } from './gridster-item-vo.model';
import { ViewService } from './view.service';
import { WidgetService } from './widget.service';
@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.component.html',
  styleUrls: ['./inicial.component.scss']
})
export class InicialComponent implements OnInit {
  constructor(
    private modalService: NgbModal,
    private inicialService: InicialServiceService,
    private messageService: MessageService,
    private view: ViewService,
    private widgetService: WidgetService
  ) {}
  public nameDashboard: string = null;
  public corDoDashboard = '#1fc3c3';
  public icon = 'fa fa-pie-chart';
  public abrirDialogIcon = false;
  public content: any;
  public dashboards = null;
  public dashboard: Dashboard = null;
  public dashs: Dashboard[] = [];
  public hasDashboards: boolean;
  public tabMenuDashboard: MenuItem[] = [];
  public dashboardInicial: MenuItem;
  public tabMenu: MenuItem[] = [];
  public isPlusDashboard = false;
  public index: number;
  public cont = 0;
  public icons = [
    { icon: 'fa fa-glass' },
    { icon: 'fa fa-music' },
    { icon: 'fa fa-search' },
    { icon: 'fa fa-envelope-o' },
    { icon: 'fa fa-heart' },
    { icon: 'fa fa-star' },
    { icon: 'fa fa-star-o' },
    { icon: 'fa fa-user' },
    { icon: 'fa fa-film' },
    { icon: 'fa fa-th-large' },
    { icon: 'fa fa-th' },
    { icon: 'fa fa-th-list' },
    { icon: 'fa fa-check' },
    { icon: 'fa fa-times' },
    { icon: 'fa fa-search-plus' },
    { icon: 'fa fa-search-minus' },
    { icon: 'fa fa-power-off' },
    { icon: 'fa fa-signal' },
    { icon: 'fa fa-cog' },
    { icon: 'fa fa-trash-o' },
    { icon: 'fa fa-home' },
    { icon: 'fa fa-file-o' },
    { icon: 'fa fa-clock-o' },
    { icon: 'fa fa-road' },
    { icon: 'fa fa-download' },
    { icon: 'fa fa-arrow-circle-o-down' },
    { icon: 'fa fa-arrow-circle-o-up' },
    { icon: 'fa fa-inbox' },
    { icon: 'fa fa-play-circle-o' },
    { icon: 'fa fa-repeat' },
    { icon: 'fa fa-refresh' },
    { icon: 'fa fa-list-alt' },
    { icon: 'fa fa-lock' },
    { icon: 'fa fa-flag' },
    { icon: 'fa fa-headphones' },
    { icon: 'fa fa-volume-off' },
    { icon: 'fa fa-volume-down' },
    { icon: 'fa fa-volume-up' },
    { icon: 'fa fa-qrcode' },
    { icon: 'fa fa-barcode' },
    { icon: 'fa fa-tag' },
    { icon: 'fa fa-tags' },
    { icon: 'fa fa-book' },
    { icon: 'fa fa-bookmark' },
    { icon: 'fa fa-print' },
    { icon: 'fa fa-camera' },
    { icon: 'fa fa-font' },
    { icon: 'fa fa-bold' },
    { icon: 'fa fa-italic' },
    { icon: 'fa fa-text-height' },
    { icon: 'fa fa-text-width' },
    { icon: 'fa fa-align-left' },
    { icon: 'fa fa-align-center' },
    { icon: 'fa fa-align-right' },
    { icon: 'fa fa-align-justify' },
    { icon: 'fa fa-list' },
    { icon: 'fa fa-outdent' },
    { icon: 'fa fa-indent' },
    { icon: 'fa fa-video-camera' },
    { icon: 'fa fa-picture-o' },
    { icon: 'fa fa-pencil' },
    { icon: 'fa fa-map-marker' },
    { icon: 'fa fa-adjust' },
    { icon: 'fa fa-tint' },
    { icon: 'fa fa-pencil-square-o' },
    { icon: 'fa fa-share-square-o' },
    { icon: 'fa fa-check-square-o' },
    { icon: 'fa fa-arrows' },
    { icon: 'fa fa-step-backward' },
    { icon: 'fa fa-fast-backward' },
    { icon: 'fa fa-backward' },
    { icon: 'fa fa-play' },
    { icon: 'fa fa-pause' },
    { icon: 'fa fa-stop' },
    { icon: 'fa fa-forward' },
    { icon: 'fa fa-fast-forward' },
    { icon: 'fa fa-step-forward' },
    { icon: 'fa fa-eject' },
    { icon: 'fa fa-chevron-left' },
    { icon: 'fa fa-chevron-right' },
    { icon: 'fa fa-plus-circle' },
    { icon: 'fa fa-minus-circle' },
    { icon: 'fa fa-times-circle' },
    { icon: 'fa fa-check-circle' },
    { icon: 'fa fa-question-circle' },
    { icon: 'fa fa-info-circle' },
    { icon: 'fa fa-crosshairs' },
    { icon: 'fa fa-times-circle-o' },
    { icon: 'fa fa-check-circle-o' },
    { icon: 'fa fa-ban' },
    { icon: 'fa fa-arrow-left' },
    { icon: 'fa fa-arrow-right' },
    { icon: 'fa fa-arrow-up' },
    { icon: 'fa fa-arrow-down' },
    { icon: 'fa fa-share' },
    { icon: 'fa fa-expand' },
    { icon: 'fa fa-compress' },
    { icon: 'fa fa-plus' },
    { icon: 'fa fa-minus' },
    { icon: 'fa fa-asterisk' },
    { icon: 'fa fa-exclamation-circle' },
    { icon: 'fa fa-gift' },
    { icon: 'fa fa-leaf' },
    { icon: 'fa fa-fire' },
    { icon: 'fa fa-eye' },
    { icon: 'fa fa-eye-slash' },
    { icon: 'fa fa-exclamation-triangle' },
    { icon: 'fa fa-plane' },
    { icon: 'fa fa-calendar' },
    { icon: 'fa fa-random' },
    { icon: 'fa fa-comment' },
    { icon: 'fa fa-magnet' },
    { icon: 'fa fa-chevron-up' },
    { icon: 'fa fa-chevron-down' },
    { icon: 'fa fa-retweet' },
    { icon: 'fa fa-shopping-cart' },
    { icon: 'fa fa-folder' },
    { icon: 'fa fa-folder-open' },
    { icon: 'fa fa-arrows-v' },
    { icon: 'fa fa-arrows-h' },
    { icon: 'fa fa-bar-chart' },
    { icon: 'fa fa-twitter-square' },
    { icon: 'fa fa-facebook-square' },
    { icon: 'fa fa-camera-retro' },
    { icon: 'fa fa-key' },
    { icon: 'fa fa-cogs' },
    { icon: 'fa fa-comments' },
    { icon: 'fa fa-thumbs-o-up' },
    { icon: 'fa fa-thumbs-o-down' },
    { icon: 'fa fa-star-half' },
    { icon: 'fa fa-heart-o' },
    { icon: 'fa fa-sign-out' },
    { icon: 'fa fa-linkedin-square' },
    { icon: 'fa fa-thumb-tack' },
    { icon: 'fa fa-external-link' },
    { icon: 'fa fa-sign-in' },
    { icon: 'fa fa-trophy' },
    { icon: 'fa fa-github-square' },
    { icon: 'fa fa-upload' },
    { icon: 'fa fa-lemon-o' },
    { icon: 'fa fa-phone' },
    { icon: 'fa fa-square-o' },
    { icon: 'fa fa-bookmark-o' },
    { icon: 'fa fa-phone-square' },
    { icon: 'fa fa-twitter' },
    { icon: 'fa fa-facebook' },
    { icon: 'fa fa-github' },
    { icon: 'fa fa-unlock' },
    { icon: 'fa fa-credit-card' },
    { icon: 'fa fa-rss' },
    { icon: 'fa fa-hdd-o' },
    { icon: 'fa fa-bullhorn' },
    { icon: 'fa fa-bell' },
    { icon: 'fa fa-certificate' },
    { icon: 'fa fa-hand-o-right' },
    { icon: 'fa fa-hand-o-left' },
    { icon: 'fa fa-hand-o-up' },
    { icon: 'fa fa-hand-o-down' },
    { icon: 'fa fa-arrow-circle-left' },
    { icon: 'fa fa-arrow-circle-right' },
    { icon: 'fa fa-arrow-circle-up' },
    { icon: 'fa fa-arrow-circle-down' },
    { icon: 'fa fa-globe' },
    { icon: 'fa fa-wrench' },
    { icon: 'fa fa-tasks' },
    { icon: 'fa fa-filter' },
    { icon: 'fa fa-briefcase' },
    { icon: 'fa fa-arrows-alt' },
    { icon: 'fa fa-users' },
    { icon: 'fa fa-link' },
    { icon: 'fa fa-cloud' },
    { icon: 'fa fa-flask' },
    { icon: 'fa fa-scissors' },
    { icon: 'fa fa-files-o' },
    { icon: 'fa fa-paperclip' },
    { icon: 'fa fa-floppy-o' },
    { icon: 'fa fa-square' },
    { icon: 'fa fa-bars' },
    { icon: 'fa fa-list-ul' },
    { icon: 'fa fa-list-ol' },
    { icon: 'fa fa-strikethrough' },
    { icon: 'fa fa-underline' },
    { icon: 'fa fa-table' },
    { icon: 'fa fa-magic' },
    { icon: 'fa fa-truck' },
    { icon: 'fa fa-pinterest' },
    { icon: 'fa fa-pinterest-square' },
    { icon: 'fa fa-google-plus-square' },
    { icon: 'fa fa-google-plus' },
    { icon: 'fa fa-money' },
    { icon: 'fa fa-caret-down' },
    { icon: 'fa fa-caret-up' },
    { icon: 'fa fa-caret-left' },
    { icon: 'fa fa-caret-right' },
    { icon: 'fa fa-columns' },
    { icon: 'fa fa-sort' },
    { icon: 'fa fa-sort-desc' },
    { icon: 'fa fa-sort-asc' },
    { icon: 'fa fa-envelope' },
    { icon: 'fa fa-linkedin' },
    { icon: 'fa fa-undo' },
    { icon: 'fa fa-gavel' },
    { icon: 'fa fa-tachometer' },
    { icon: 'fa fa-comment-o' },
    { icon: 'fa fa-comments-o' },
    { icon: 'fa fa-bolt' },
    { icon: 'fa fa-sitemap' },
    { icon: 'fa fa-umbrella' },
    { icon: 'fa fa-clipboard' },
    { icon: 'fa fa-lightbulb-o' },
    { icon: 'fa fa-exchange' },
    { icon: 'fa fa-cloud-download' },
    { icon: 'fa fa-cloud-upload' },
    { icon: 'fa fa-user-md' },
    { icon: 'fa fa-stethoscope' },
    { icon: 'fa fa-suitcase' },
    { icon: 'fa fa-bell-o' },
    { icon: 'fa fa-coffee' },
    { icon: 'fa fa-cutlery' },
    { icon: 'fa fa-file-text-o' },
    { icon: 'fa fa-building-o' },
    { icon: 'fa fa-hospital-o' },
    { icon: 'fa fa-ambulance' },
    { icon: 'fa fa-medkit' },
    { icon: 'fa fa-fighter-jet' },
    { icon: 'fa fa-beer' },
    { icon: 'fa fa-h-square' },
    { icon: 'fa fa-plus-square' },
    { icon: 'fa fa-angle-double-left' },
    { icon: 'fa fa-angle-double-right' },
    { icon: 'fa fa-angle-double-up' },
    { icon: 'fa fa-angle-double-down' },
    { icon: 'fa fa-angle-left' },
    { icon: 'fa fa-angle-right' },
    { icon: 'fa fa-angle-up' },
    { icon: 'fa fa-angle-down' },
    { icon: 'fa fa-desktop' },
    { icon: 'fa fa-laptop' },
    { icon: 'fa fa-tablet' },
    { icon: 'fa fa-mobile' },
    { icon: 'fa fa-circle-o' },
    { icon: 'fa fa-quote-left' },
    { icon: 'fa fa-quote-right' },
    { icon: 'fa fa-spinner' },
    { icon: 'fa fa-circle' },
    { icon: 'fa fa-reply' },
    { icon: 'fa fa-github-alt' },
    { icon: 'fa fa-folder-o' },
    { icon: 'fa fa-folder-open-o' },
    { icon: 'fa fa-smile-o' },
    { icon: 'fa fa-frown-o' },
    { icon: 'fa fa-meh-o' },
    { icon: 'fa fa-gamepad' },
    { icon: 'fa fa-keyboard-o' },
    { icon: 'fa fa-flag-o' },
    { icon: 'fa fa-flag-checkered' },
    { icon: 'fa fa-terminal' },
    { icon: 'fa fa-code' },
    { icon: 'fa fa-reply-all' },
    { icon: 'fa fa-star-half-o' },
    { icon: 'fa fa-location-arrow' },
    { icon: 'fa fa-crop' },
    { icon: 'fa fa-code-fork' },
    { icon: 'fa fa-chain-broken' },
    { icon: 'fa fa-question' },
    { icon: 'fa fa-info' },
    { icon: 'fa fa-exclamation' },
    { icon: 'fa fa-superscript' },
    { icon: 'fa fa-subscript' },
    { icon: 'fa fa-eraser' },
    { icon: 'fa fa-puzzle-piece' },
    { icon: 'fa fa-microphone' },
    { icon: 'fa fa-microphone-slash' },
    { icon: 'fa fa-shield' },
    { icon: 'fa fa-calendar-o' },
    { icon: 'fa fa-fire-extinguisher' },
    { icon: 'fa fa-rocket' },
    { icon: 'fa fa-maxcdn' },
    { icon: 'fa fa-chevron-circle-left' },
    { icon: 'fa fa-chevron-circle-right' },
    { icon: 'fa fa-chevron-circle-up' },
    { icon: 'fa fa-chevron-circle-down' },
    { icon: 'fa fa-html5' },
    { icon: 'fa fa-css3' },
    { icon: 'fa fa-anchor' },
    { icon: 'fa fa-unlock-alt' },
    { icon: 'fa fa-bullseye' },
    { icon: 'fa fa-ellipsis-h' },
    { icon: 'fa fa-ellipsis-v' },
    { icon: 'fa fa-rss-square' },
    { icon: 'fa fa-play-circle' },
    { icon: 'fa fa-ticket' },
    { icon: 'fa fa-minus-square' },
    { icon: 'fa fa-minus-square-o' },
    { icon: 'fa fa-level-up' },
    { icon: 'fa fa-level-down' },
    { icon: 'fa fa-check-square' },
    { icon: 'fa fa-pencil-square' },
    { icon: 'fa fa-external-link-square' },
    { icon: 'fa fa-share-square' },
    { icon: 'fa fa-compass' },
    { icon: 'fa fa-caret-square-o-down' },
    { icon: 'fa fa-caret-square-o-up' },
    { icon: 'fa fa-caret-square-o-right' },
    { icon: 'fa fa-eur' },
    { icon: 'fa fa-gbp' },
    { icon: 'fa fa-usd' },
    { icon: 'fa fa-inr' },
    { icon: 'fa fa-jpy' },
    { icon: 'fa fa-rub' },
    { icon: 'fa fa-krw' },
    { icon: 'fa fa-btc' },
    { icon: 'fa fa-file' },
    { icon: 'fa fa-file-text' },
    { icon: 'fa fa-sort-alpha-asc' },
    { icon: 'fa fa-sort-alpha-desc' },
    { icon: 'fa fa-sort-amount-asc' },
    { icon: 'fa fa-sort-amount-desc' },
    { icon: 'fa fa-sort-numeric-asc' },
    { icon: 'fa fa-sort-numeric-desc' },
    { icon: 'fa fa-thumbs-up' },
    { icon: 'fa fa-thumbs-down' },
    { icon: 'fa fa-youtube-square' },
    { icon: 'fa fa-youtube' },
    { icon: 'fa fa-xing' },
    { icon: 'fa fa-xing-square' },
    { icon: 'fa fa-youtube-play' },
    { icon: 'fa fa-dropbox' },
    { icon: 'fa fa-stack-overflow' },
    { icon: 'fa fa-instagram' },
    { icon: 'fa fa-flickr' },
    { icon: 'fa fa-adn' },
    { icon: 'fa fa-bitbucket' },
    { icon: 'fa fa-bitbucket-square' },
    { icon: 'fa fa-tumblr' },
    { icon: 'fa fa-tumblr-square' },
    { icon: 'fa fa-long-arrow-down' },
    { icon: 'fa fa-long-arrow-up' },
    { icon: 'fa fa-long-arrow-left' },
    { icon: 'fa fa-long-arrow-right' },
    { icon: 'fa fa-apple' },
    { icon: 'fa fa-windows' },
    { icon: 'fa fa-android' },
    { icon: 'fa fa-linux' },
    { icon: 'fa fa-dribbble' },
    { icon: 'fa fa-skype' },
    { icon: 'fa fa-foursquare' },
    { icon: 'fa fa-trello' },
    { icon: 'fa fa-female' },
    { icon: 'fa fa-male' },
    { icon: 'fa fa-gratipay' },
    { icon: 'fa fa-sun-o' },
    { icon: 'fa fa-moon-o' },
    { icon: 'fa fa-archive' },
    { icon: 'fa fa-bug' },
    { icon: 'fa fa-vk' },
    { icon: 'fa fa-weibo' },
    { icon: 'fa fa-renren' },
    { icon: 'fa fa-pagelines' },
    { icon: 'fa fa-stack-exchange' },
    { icon: 'fa fa-arrow-circle-o-right' },
    { icon: 'fa fa-arrow-circle-o-left' },
    { icon: 'fa fa-caret-square-o-left' },
    { icon: 'fa fa-dot-circle-o' },
    { icon: 'fa fa-wheelchair' },
    { icon: 'fa fa-vimeo-square' },
    { icon: 'fa fa-try' },
    { icon: 'fa fa-plus-square-o' },
    { icon: 'fa fa-space-shuttle' },
    { icon: 'fa fa-slack' },
    { icon: 'fa fa-envelope-square' },
    { icon: 'fa fa-wordpress' },
    { icon: 'fa fa-openid' },
    { icon: 'fa fa-university' },
    { icon: 'fa fa-graduation-cap' },
    { icon: 'fa fa-yahoo' },
    { icon: 'fa fa-google' },
    { icon: 'fa fa-reddit' },
    { icon: 'fa fa-reddit-square' },
    { icon: 'fa fa-stumbleupon-circle' },
    { icon: 'fa fa-stumbleupon' },
    { icon: 'fa fa-delicious' },
    { icon: 'fa fa-digg' },
    { icon: 'fa fa-pied-piper' },
    { icon: 'fa fa-pied-piper-alt' },
    { icon: 'fa fa-drupal' },
    { icon: 'fa fa-joomla' },
    { icon: 'fa fa-language' },
    { icon: 'fa fa-fax' },
    { icon: 'fa fa-building' },
    { icon: 'fa fa-child' },
    { icon: 'fa fa-paw' },
    { icon: 'fa fa-spoon' },
    { icon: 'fa fa-cube' },
    { icon: 'fa fa-cubes' },
    { icon: 'fa fa-behance' },
    { icon: 'fa fa-behance-square' },
    { icon: 'fa fa-steam' },
    { icon: 'fa fa-steam-square' },
    { icon: 'fa fa-recycle' },
    { icon: 'fa fa-car' },
    { icon: 'fa fa-taxi' },
    { icon: 'fa fa-tree' },
    { icon: 'fa fa-spotify' },
    { icon: 'fa fa-deviantart' },
    { icon: 'fa fa-soundcloud' },
    { icon: 'fa fa-database' },
    { icon: 'fa fa-file-pdf-o' },
    { icon: 'fa fa-file-word-o' },
    { icon: 'fa fa-file-excel-o' },
    { icon: 'fa fa-file-powerpoint-o' },
    { icon: 'fa fa-file-image-o' },
    { icon: 'fa fa-file-archive-o' },
    { icon: 'fa fa-file-audio-o' },
    { icon: 'fa fa-file-video-o' },
    { icon: 'fa fa-file-code-o' },
    { icon: 'fa fa-vine' },
    { icon: 'fa fa-codepen' },
    { icon: 'fa fa-jsfiddle' },
    { icon: 'fa fa-life-ring' },
    { icon: 'fa fa-circle-o-notch' },
    { icon: 'fa fa-rebel' },
    { icon: 'fa fa-empire' },
    { icon: 'fa fa-git-square' },
    { icon: 'fa fa-git' },
    { icon: 'fa fa-hacker-news' },
    { icon: 'fa fa-tencent-weibo' },
    { icon: 'fa fa-qq' },
    { icon: 'fa fa-weixin' },
    { icon: 'fa fa-paper-plane' },
    { icon: 'fa fa-paper-plane-o' },
    { icon: 'fa fa-history' },
    { icon: 'fa fa-circle-thin' },
    { icon: 'fa fa-header' },
    { icon: 'fa fa-paragraph' },
    { icon: 'fa fa-sliders' },
    { icon: 'fa fa-share-alt' },
    { icon: 'fa fa-share-alt-square' },
    { icon: 'fa fa-bomb' },
    { icon: 'fa fa-futbol-o' },
    { icon: 'fa fa-tty' },
    { icon: 'fa fa-binoculars' },
    { icon: 'fa fa-plug' },
    { icon: 'fa fa-slideshare' },
    { icon: 'fa fa-twitch' },
    { icon: 'fa fa-yelp' },
    { icon: 'fa fa-newspaper-o' },
    { icon: 'fa fa-wifi' },
    { icon: 'fa fa-calculator' },
    { icon: 'fa fa-paypal' },
    { icon: 'fa fa-google-wallet' },
    { icon: 'fa fa-cc-visa' },
    { icon: 'fa fa-cc-mastercard' },
    { icon: 'fa fa-cc-discover' },
    { icon: 'fa fa-cc-amex' },
    { icon: 'fa fa-cc-paypal' },
    { icon: 'fa fa-cc-stripe' },
    { icon: 'fa fa-bell-slash' },
    { icon: 'fa fa-bell-slash-o' },
    { icon: 'fa fa-trash' },
    { icon: 'fa fa-copyright' },
    { icon: 'fa fa-at' },
    { icon: 'fa fa-eyedropper' },
    { icon: 'fa fa-paint-brush' },
    { icon: 'fa fa-birthday-cake' },
    { icon: 'fa fa-area-chart' },
    { icon: 'fa fa-pie-chart' },
    { icon: 'fa fa-line-chart' },
    { icon: 'fa fa-lastfm' },
    { icon: 'fa fa-lastfm-square' },
    { icon: 'fa fa-toggle-off' },
    { icon: 'fa fa-toggle-on' },
    { icon: 'fa fa-bicycle' },
    { icon: 'fa fa-bus' },
    { icon: 'fa fa-ioxhost' },
    { icon: 'fa fa-angellist' },
    { icon: 'fa fa-cc' },
    { icon: 'fa fa-ils' },
    { icon: 'fa fa-meanpath' },
    { icon: 'fa fa-buysellads' },
    { icon: 'fa fa-connectdevelop' },
    { icon: 'fa fa-dashcube' },
    { icon: 'fa fa-forumbee' },
    { icon: 'fa fa-leanpub' },
    { icon: 'fa fa-sellsy' },
    { icon: 'fa fa-shirtsinbulk' },
    { icon: 'fa fa-simplybuilt' },
    { icon: 'fa fa-skyatlas' },
    { icon: 'fa fa-cart-plus' },
    { icon: 'fa fa-cart-arrow-down' },
    { icon: 'fa fa-diamond' },
    { icon: 'fa fa-ship' },
    { icon: 'fa fa-user-secret' },
    { icon: 'fa fa-motorcycle' },
    { icon: 'fa fa-street-view' },
    { icon: 'fa fa-heartbeat' },
    { icon: 'fa fa-venus' },
    { icon: 'fa fa-mars' },
    { icon: 'fa fa-mercury' },
    { icon: 'fa fa-transgender' },
    { icon: 'fa fa-transgender-alt' },
    { icon: 'fa fa-venus-double' },
    { icon: 'fa fa-mars-double' },
    { icon: 'fa fa-venus-mars' },
    { icon: 'fa fa-mars-stroke' },
    { icon: 'fa fa-mars-stroke-v' },
    { icon: 'fa fa-mars-stroke-h' },
    { icon: 'fa fa-neuter' },
    { icon: 'fa fa-facebook-official' },
    { icon: 'fa fa-pinterest-p' },
    { icon: 'fa fa-whatsapp' },
    { icon: 'fa fa-server' },
    { icon: 'fa fa-user-plus' },
    { icon: 'fa fa-user-times' },
    { icon: 'fa fa-bed' },
    { icon: 'fa fa-viacoin' },
    { icon: 'fa fa-train' },
    { icon: 'fa fa-subway' },
    { icon: 'fa fa-medium' }
  ];
  public options: GridsterConfig;
  public widgets: GridsterItem[];
  public widget = new GridsterItemVO();
  public event: any;
  public ultimoRegistro: number;
  public gridsterItem;
  public item;
  public corFundoDash: string;

  // NG
  public telaDeCriacao: boolean;
  public telaDeServicos: boolean;
  public grupoDeViews = new GrupoDeViews();
  public viewsSelecao = new Array<View>();
  public listaDeCores = new Array<Cor>();
  public viewSelecionada = new View();

  public static itemChange(item, itemComponent) {
    Eventos.atualizarWidget.emit(item);
  }

  public static itemResize(item, itemComponent) {
    Eventos.atualizarWidget.emit(item);
  }

  ngOnInit(): void {
    this.iniciandoDashboard();

    this.options = {
      itemChangeCallback: InicialComponent.itemChange,
      itemResizeCallback: InicialComponent.itemResize,
      gridType: 'fixed'
    };

    Eventos.atualizarWidget.subscribe(item => {
      this.atualizarWidgets(item);
    });

    Eventos.atualizarWidget.subscribe(item => {
      this.atualizarWidgets(item);
    });

    this.buscarViews();
  }

  public iniciandoDashboard() {
    this.inicialService.buscarTabMenu().subscribe(
      response => {
        this.tabMenuDashboard = response;
        if (this.tabMenuDashboard != null && this.tabMenuDashboard !== []) {
          this.tabMenuDashboard.push({ icon: 'fa fa-plus', id: '999' });
        }

        this.dashboardInicial = this.tabMenuDashboard[0];
        this.corFundoDash = this.dashboardInicial.style;

        this.ultimoRegistro = this.tabMenuDashboard.length;
        this.ultimoRegistro = this.ultimoRegistro - 1;
      },
      erro => {
        console.log('Deu ruim');
      }
    );

    this.inicialService.buscarDashboard().subscribe(
      response => {
        this.dashs = response;

        this.dashboards = new Map();
        this.dashs.forEach(element => {
          this.dashboards.set(element.codigo, element);
          this.cont = element.codigo;
        });

        this.hasDashboards = false;
        if (this.dashs == null || this.dashs.length === 0) {
          this.hasDashboards = true;
        } else {
          this.inicialService
            .buscarDashboardId(this.dashboardInicial.id.toString())
            .subscribe(
              resp => {
                console.log(resp.widgets);
                this.widgets = resp.widgets;
                this.options = {
                  itemChangeCallback: InicialComponent.itemChange,
                  itemResizeCallback: InicialComponent.itemResize
                };
              },
              erro => {
                console.log('Deu ruim');
              }
            );
        }
      },
      erro => console.log('Deu ruim')
    );
  }

  public criarDashboard() {
    this.cont = +this.cont + +1;
    if (this.tabMenuDashboard.length - 1 === this.index) {
      if (this.tabMenuDashboard.length > 0) {
        this.tabMenuDashboard = this.tabMenuDashboard.filter(
          (item, i) => i !== this.index
        );
        this.event.preventDefault();
      }
    }

    this.tabMenu = [];
    this.tabMenu.push({
      label: this.nameDashboard,
      icon: this.icon,
      id: this.cont.toString(),
      style: `${this.corDoDashboard}`
    });

    this.inicialService.incluirTabMenu(this.tabMenu[0]).subscribe(
      response => {
        console.log('deu certo');
      },
      erro => {
        console.log('Deu ruim');
      }
    );

    this.nameDashboard = null;

    this.icon = 'fa fa-pie-chart';
    this.corDoDashboard = '#1fc3c3';

    this.dashboard = new Dashboard(this.cont, new Array<GridsterItem>());
    this.dashboard.codigo = this.cont;
    this.dashboard.idMenuItem = this.cont;

    this.inicialService.incluirDashboard(this.dashboard).subscribe(
      response => {
        this.iniciandoDashboard();
      },
      erro => console.log('Deu ruim!')
    );

    this.fecharDialog();
  }

  public switchDashboard(event, index: number, content: any, item) {
    this.index = index;
    this.event = event;
    this.content = content;
    if (this.tabMenuDashboard.length - 1 === this.index) {
      this.open(this.content);
    } else {
      const id = item.id;
      this.corFundoDash = item.style;
      this.inicialService.buscarDashboardId(id.toString()).subscribe(
        response => {
          this.widgets = response.widgets;
          this.options = {
            itemChangeCallback: InicialComponent.itemChange,
            itemResizeCallback: InicialComponent.itemResize
          };
        },
        erro => console.log('Deu ruim')
      );
    }
  }

  public closeItem(event, item) {
    this.item = item;
    this.messageService.clear();
    this.messageService.add({
      key: 'c',
      sticky: true,
      severity: 'info',
      summary: 'Você realmente gostaria de excluir?',
      detail: 'Confirme para excluir!'
    });
  }

  public onConfirm() {
    const id = this.item.id;
    this.inicialService.excluirDashboard(id.toString()).subscribe(
      response => {
        this.iniciandoDashboard();
        this.messageService.clear('c');
      },
      erro => {
        console.log('Deu ruim!');
      }
    );
  }

  public onReject() {
    this.messageService.clear('c');
  }

  public atualizarWidgets(item) {
    this.inicialService.atualizarWidget(item).subscribe(
      response => {
        console.log('Deu certo');
      },
      erro => {
        console.log('Deu ruim');
      }
    );
  }

  public changedOptions(codigo: number) {
    this.dashboards[codigo].propriedades.api.optionsChanged();
  }

  public removeItem(codigo: number, item) {
    this.dashboards[codigo].propriedades.splice(
      this.dashboards[codigo].propriedades.indexOf(item),
      1
    );
  }

  public addItem() {
    // this.dashboards.push();
  }

  public open(content): void {
    this.content = content;
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

  public openIcon(modalIcon): void {
    this.modalService.open(modalIcon, { ariaLabelledBy: 'modal-basic-title' });
  }

  public atualizarIcon(icon): void {
    this.icon = icon;
    this.fecharDialog();
    this.open(this.content);
  }

  public fecharDialog(): void {
    this.modalService.dismissAll();
  }

  public adicionarItem(event, item) {
    this.item = item;
    this.telaDeCriacao = true;
  }

  public adicionarWidget(): void {
    this.prepararWidget();
    this.widget.dashboard = this.item.id;
    this.widgetService.criarWidget(this.widget).subscribe(
      response => {
        this.iniciandoDashboard();
      },
      erro => console.log('deu ruim')
    );
    this.limparDados();
    this.telaDeCriacao = false;
  }

  public abrirTelaCriacao(): void {
    this.limparDados();
    this.telaDeCriacao = true;
  }

  public abrirTelaServicos(): void {
    this.telaDeServicos = true;
    this.telaDeCriacao = false;
  }

  public fecharTelaServicos(): void {
    this.telaDeServicos = false;
    this.telaDeCriacao = true;
  }

  public buscarViews(): void {
    this.view.buscarViews().subscribe(views => {
      this.grupoDeViews = this.view.getGrupoDeViews(views);
    });
  }

  public direcionarDadosDeViews(codigo: number) {
    if (codigo === 1) {
      this.viewsSelecao = this.grupoDeViews.numerico;
      this.widget.tipoGrafico = 'NUMERICO';
    } else if (codigo === 2) {
      this.viewsSelecao = this.grupoDeViews.barra;
      this.widget.tipoGrafico = 'BARRA';
    } else if (codigo === 3) {
      this.viewsSelecao = this.grupoDeViews.pizza;
      this.widget.tipoGrafico = 'PIZZA';
    } else if (codigo === 4) {
      this.viewsSelecao = this.grupoDeViews.linha;
      this.widget.tipoGrafico = 'LINHA';
    }

    setTimeout(() => {
      this.abrirTelaServicos();
    }, 500);
  }

  public obterView(view: View) {
    this.fecharTelaServicos();
    this.viewSelecionada = view;
    this.listaDeCores = [];
    for (let i = 0; i < view.quantidadeDeCores; i++) {
      this.listaDeCores.push(new Cor('#fff'));
    }
  }

  public prepararWidget(): void {
    this.widget.view = this.viewSelecionada.codigoView;
    this.listaDeCores.forEach(cor => {
      this.widget.cor = this.widget.cor + ';' + cor.cor;
    });
    this.widget.dragEnabled = true;
    this.widget.resizeEnabled = true;
  }

  private limparDados(): void {
    this.widget = new GridsterItemVO();
    this.viewSelecionada = new View();
    this.listaDeCores = [];
    this.buscarViews();
  }

  public excluirWidget(widget: GridsterItemVO) {
    this.widgetService
      .excluirWidget(widget.id)
      .subscribe(() => console.log('Deu certo!'));
    for (let i = 0; i < this.widgets.length; i++) {
      if (this.verificarWidget(this.widgets[i], widget.id)) {
        this.widgets.splice(i, 1);
      }
    }
    this.options.api.optionsChanged();
  }

  public verificarWidget(widget: GridsterItem, id: string): boolean {
    return widget.id === id ? true : false;
  }
}
