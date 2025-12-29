/**
 * script.js
 * Скомпилированная версия логики лендинга (ES5-compatible style).
 * Содержит:
 * - обновление года
 * - мобильное меню
 * - плавный скролл
 * - симулятор датчиков и оповещений
 * - обработка формы контактов
 */
/* eslint-disable */
/* Helper selectors */
var $ = function (sel) { return document.querySelector(sel); };
var $$ = function (sel) { return Array.from(document.querySelectorAll(sel)); };
function initYear() {
    var el = document.getElementById('year');
    if (el)
        el.textContent = String(new Date().getFullYear());
}
function initMobileMenu() {
    var toggle = document.querySelector('.mobile-toggle');
    if (!toggle)
        return;
    var menuEl = null;
    toggle.addEventListener('click', function () {
        if (!menuEl) {
            menuEl = document.createElement('div');
            menuEl.className = 'mobile-menu';
            menuEl.innerHTML = "\n        <a href=\"#home\">\u0413\u043B\u0430\u0432\u043D\u0430\u044F</a>\n        <a href=\"#advantages\">\u041F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430</a>\n        <a href=\"#tech\">\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438</a>\n        <a href=\"#about\">\u041E \u043D\u0430\u0441</a>\n        <a href=\"#contacts\">\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B</a>\n        <button class=\"btn-outline\" id=\"mobile-close\">\u0417\u0430\u043A\u0440\u044B\u0442\u044C</button>\n      ";
            document.body.appendChild(menuEl);
            var close_1 = document.getElementById('mobile-close');
            close_1.addEventListener('click', function () {
                menuEl === null || menuEl === void 0 ? void 0 : menuEl.remove();
                menuEl = null;
            });
        }
        else {
            menuEl.remove();
            menuEl = null;
        }
    });
}
function initSmoothScroll() {
    var links = Array.from(document.querySelectorAll('a[href^="#"]'));
    links.forEach(function (link) {
        link.addEventListener('click', function (e) {
            var href = link.getAttribute('href') || '';
            if (href.startsWith('#')) {
                e.preventDefault();
                var target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });
}
var SensorSimulator = /** @class */ (function () {
    function SensorSimulator(interval, handlers) {
        if (interval === void 0) { interval = 1600; }
        this.interval = interval;
        this.handlers = handlers || {};
        this.timer = null;
        this.running = false;
    }
    SensorSimulator.prototype.start = function () {
        var _this = this;
        if (this.running)
            return;
        this.running = true;
        this.timer = window.setInterval(function () { return _this.tick(); }, this.interval);
        this.tick();
    };
    SensorSimulator.prototype.stop = function () {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
        this.running = false;
    };
    SensorSimulator.prototype.tick = function () {
        var temp = +(20 + Math.random() * 20).toFixed(1);
        var hum = +(30 + Math.random() * 50).toFixed(0);
        var pm = +(5 + Math.random() * 200).toFixed(0);
        var gas = Math.random() > 0.92 ? 'Опасно' : 'Норма';
        var values = { temp: temp, hum: hum, pm: pm, gas: gas };
        if (this.handlers.onUpdate)
            this.handlers.onUpdate(values);
        var alerts = [];
        if (temp >= 60)
            alerts.push("\u041A\u0440\u0438\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430: " + temp + "\u00B0C");
        else if (temp >= 50)
            alerts.push("\u0412\u044B\u0441\u043E\u043A\u0430\u044F \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430: " + temp + "\u00B0C");
        if (pm >= 150)
            alerts.push("\u0412\u044B\u0441\u043E\u043A\u0430\u044F \u043A\u043E\u043D\u0446\u0435\u043D\u0442\u0440\u0430\u0446\u0438\u044F \u043F\u044B\u043B\u0438: " + pm + " \u00B5g/m\u00B3");
        if (gas === 'Опасно')
            alerts.push("\u041E\u0431\u043D\u0430\u0440\u0443\u0436\u0435\u043D\u044B \u0432\u0440\u0435\u0434\u043D\u044B\u0435 \u0433\u0430\u0437\u044B (MQ2)");
        if (alerts.length) {
            if (this.handlers.onAlert)
                this.handlers.onAlert(alerts.join('. '));
        }
    };
    return SensorSimulator;
}());
function initSimulator() {
    var valTemp = document.getElementById('val-temp');
    var valHum = document.getElementById('val-hum');
    var valPm = document.getElementById('val-pm');
    var valGas = document.getElementById('val-gas');
    var alertBox = document.getElementById('alert-box');
    var sim = new SensorSimulator(1600, {
        onUpdate: function (values) {
            if (valTemp)
                valTemp.textContent = values.temp + " \u00B0C";
            if (valHum)
                valHum.textContent = values.hum + " %";
            if (valPm)
                valPm.textContent = values.pm + " \u00B5g/m\u00B3";
            if (valGas)
                valGas.textContent = values.gas;
            if (alertBox && (!values.pm || values.pm < 150) && values.gas !== 'Опасно' && values.temp < 50) {
                alertBox.hidden = true;
                alertBox.textContent = '';
            }
        },
        onAlert: function (msg) {
            if (alertBox) {
                alertBox.hidden = false;
                alertBox.textContent = '\u26A0\uFE0F ' + msg + ' \u2014 \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E \u0432 Telegram-\u0431\u043E\u0442.';
            }
        }
    });
    var btnSim = document.getElementById('btn-simulate');
    var btnStop = document.getElementById('btn-stop');
    btnSim === null || btnSim === void 0 ? void 0 : btnSim.addEventListener('click', function () { return sim.start(); });
    btnStop === null || btnStop === void 0 ? void 0 : btnStop.addEventListener('click', function () { return sim.stop(); });
}
function initContactForm() {
    var form = document.getElementById('contact-form');
    if (!form)
        return;
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        var fd = new FormData(form);
        var name = (fd.get('name') || '').toString().trim();
        var email = (fd.get('email') || '').toString().trim();
        var message = (fd.get('message') || '').toString().trim();
        if (!name || !email || !message) {
            alert('Пожалуйста, заполните все поля формы.');
            return;
        }
        alert('Спасибо! Ваше сообщение отправлено. Мы свяжемся в ближайшее время.');
        form.reset();
    });
}
function main() {
    initYear();
    initMobileMenu();
    initSmoothScroll();
    initSimulator();
    initContactForm();
}
document.addEventListener('DOMContentLoaded', main);