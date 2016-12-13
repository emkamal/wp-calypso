/**
 * Internal dependencies
 */
import {
	lostPassword,
	resetPassword,
	redirectLoggedIn,
} from './controller';

export default function( router ) {
	// Main route for account recovery is the lost password page
	router( '/account-recovery', redirectLoggedIn, lostPassword );
	router( '/account-recovery/reset-password', redirectLoggedIn, resetPassword );
}
