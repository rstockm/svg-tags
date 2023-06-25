new Vue({
    el: '#app',
    data: {
        buttonText: 'ENTWURF',
        buttonColor: '#737373',
        textX: 127.835,
        downloadUrl: '',
        buttonSvg: null,
        presetColors: ['rgb(241,89,42)', 'rgb(247,148,29)', 'rgb(158,184,59)', 'rgb(58,181,74)', 'rgb(37,170,226)', 'rgb(14,118,189)', 'rgb(140,98,56)', 'rgb(115,115,115)']
    },
    methods: {
        generateButton() {
            const originalFontSize = 43.333;
            const fontSize = this.buttonText.length > 14 ? originalFontSize * 2 / 3 : originalFontSize;
            const originalY = 52.233;
            const textY = originalY - (originalFontSize - fontSize) / 3;
            const buttonSvg = `
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:serif="http://www.serif.com/" width="100%" height="auto" viewBox="0 0 377 72" preserveAspectRatio="xMidYMid meet" version="1.1" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
                    <g transform="matrix(1,0,0,1,-3315,-330)">
                        <g transform="matrix(1.04068,0,0,1.13243,3299.24,320.657)">
                            <rect x="15.548" y="8.335" width="361.142" height="63.331" style="fill:none;"/>
                            <clipPath id="_clip1">
                                <rect x="15.548" y="8.335" width="361.142" height="63.331"/>
                            </clipPath>
                            <g clip-path="url(#_clip1)">
                                <g transform="matrix(0.97761,0,0,0.960453,8.98102,2.10422)">
                                    <path d="M375.467,22.733C375.467,13.498 367.451,6 357.578,6L25.089,6C15.216,6 7.2,13.498 7.2,22.733L7.2,56.2C7.2,65.435 15.216,72.933 25.089,72.933L357.578,72.933C367.451,72.933 375.467,65.435 375.467,56.2L375.467,22.733Z" style="fill:${this.buttonColor};"/>
                                </g>
                                <g transform="matrix(0.960911,0,0,0.883053,-30.4638,7.45205)">
                                    <text x="${this.textX}px" y="${textY}px" style="font-family:'Arial', sans-serif;font-weight:bold;font-size:${fontSize}px;fill:white;">${this.buttonText}</text>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
            `;
            
            const svgBlob = new Blob([buttonSvg], {type: 'image/svg+xml;charset=utf-8'});
            this.downloadUrl = URL.createObjectURL(svgBlob);
            this.buttonSvg = this.downloadUrl;
        },
        setColor(color) {
            this.buttonColor = color;
            this.generateButton();
        }
    },
    watch: {
        textX: function() {
            this.generateButton();
        }
    },
    mounted() {
        this.generateButton();
    }
});
