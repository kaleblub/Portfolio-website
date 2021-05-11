import React from 'react'

function Neumorphic() {
	return (
		<style>
			.neumorphic-radio-btn-container {
				
			}


		</style>
		<div class="neumorphic-radio-btn-container">
			<p>Are You 18 Years Old?</p>
			<div>
				<label>
					<input type="radio" className="age">
				</label>
				<label>
					<input type="radio" className="age">
				</label>
			</div>
		</div>
	)
}

export default Neumorphic;