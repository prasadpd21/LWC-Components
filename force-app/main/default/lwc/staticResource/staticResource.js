import { LightningElement } from 'lwc';
import TRAILHEAD_CHARACTERS from '@salesforce/resourceUrl/trailhead_characters';

export default class StaticResource extends LightningElement {
    trailheadLogoUrl = TRAILHEAD_CHARACTERS + '/images/trailhead_logo.png';
    einsteinUrl = TRAILHEAD_CHARACTERS + '/images/einstein.png';
}