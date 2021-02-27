var Projects = (function () {
    function Projects() {
        this.assets = Array.from(document.querySelectorAll('.gallery__image'));
        this.modal = document.querySelector('.modal');
        this.modalImage = document.querySelector('.modal__image');
        this.modalVideo = document.querySelector('.modal__video');
        this.modalCaption = document.querySelector('.modal__caption');
    }
    Projects.prototype.handleModalOpening = function () {
        var _this = this;
        this.assets.forEach(function (asset) {
            asset.addEventListener('click', function () {
                _this.modal.classList.add('display');
                if (asset instanceof HTMLImageElement) {
                    _this.modalVideo.style.display = 'none';
                    _this.modalImage.style.display = '';
                    _this.modalImage.src = asset.src;
                    _this.modalImage.alt = asset.alt;
                    _this.modalCaption.innerText = asset.alt;
                    console.log('Set image');
                }
                else {
                    _this.modalImage.style.display = 'none';
                    _this.modalVideo.style.display = '';
                    _this.modalVideo.innerHTML = '';
                    _this.modalVideo.innerHTML = asset.innerHTML;
                    _this.modalVideo.setAttribute('aria-label', asset.getAttribute('aria-label'));
                    _this.modalCaption.innerText = asset.getAttribute('aria-label');
                    _this.modalVideo.load();
                    console.log('Set video');
                }
            });
        });
    };
    Projects.prototype.handleModalClosing = function () {
        var _this = this;
        window.addEventListener('click', function (event) {
            if (event.target == _this.modal) {
                _this.modal.classList.remove('display');
            }
        });
        var x = document.querySelector('.modal__x');
        x.addEventListener('click', function (event) {
            _this.modal.classList.remove('display');
        });
    };
    Projects.prototype.init = function () {
        this.handleModalOpening();
        this.handleModalClosing();
    };
    return Projects;
}());
export { Projects };
