import React, { Component } from 'react';

class Rules extends Component {
	render() {
		return (
			<>
				<div className="page song-page">
					<div className="rules">
						<p className="song-header">{'Pikasäännöt'}</p>
						<p className="song-lyrics">
							{'• Skoolaus:\n'}
							<span className="indent">
								{'Etuviistoon oikealle - Etuviistoon vasemmalle - Eteen\n'}
							</span>
							
						</p>

						<p className="song-lyrics">
							{'• Taukojen ulkopuolella pöydästä poistuttaessa pyydetään nöyrästi anteeksi lähimmältä pöytäseurueelta.'}
						</p>
						<p className="song-lyrics">
							{'• Puheiden ja laulujen aikana ei keskustella tai liikuta.'}
						</p>
						<p className="song-lyrics">
							{'• Laulun kappaleiden välissä voidaan huudahtaa:'}
						</p>
						<div className="indent">
							<p className="song-lyrics">
								{'OMSTART – laulu tai säkeistö aloitetaan alusta'}
							</p>
							<p className="song-lyrics">
								{'SNAPSPAUS – juodaan kerran juoma-astiasta, kuitenkin enintään 2 säkeistön välein'}
							</p>
							<p className="song-lyrics">
								{'TEMPO – hidastetaan tai nopeutetaan laulua määreen mukaan, kuitenkin enintään 2 säkeistön välein'}
							</p>
							<p className="song-lyrics">
								{'• Edellisiä huuhdahtanut aloittakoon seuraavan säkeistön oikeassa tahdissa.'}
							</p>
						</div>
					</div>
				</div>
				<div className="song-footer">
					<p className="song-footer-category" onClick={() => window.location.href = '/tietovalueforlife'}>{'Säännöt'}</p>
				</div>
			</>
		);
	}
}

export default Rules;