const assert = require('assert'),
    prettyb = require('../index');

describe('prettybandwidth', () => {

    it('should export a function', () => {
        assert.ok(prettyb);
    });

    it('should print bytes', () => {
        assert.equal(prettyb(12), '12 b/s');
    });

    it('should print bytes with no space', () => {
        assert.equal(prettyb(12, true), '12b/s');
    });
    
    it('should print bytes with no space and one char', () => {
        assert.equal(prettyb(12, true, true), '12b');
    });

    it('should print bytes with space and one char', () => {
        assert.equal(prettyb(12, false, true), '12 b');
    });
    
    it('should print kilobytes', () => {
        assert.equal(prettyb(123456), '120.6 kb/s');
    });
    
    it('should print exact kilobytes', () => {
        assert.equal(prettyb(1024), '1 kb/s');
    });
    
    it('should print megs', () => {
        assert.equal(prettyb(123456789), '117.7 Mb/s');
    });
    
    it('should print exact megs', () => {
        assert.equal(prettyb(1024 * 1024), '1 Mb/s');
    });
    
    it('should print gigs', () => {
        assert.equal(prettyb(12345678901), '11.5 Gb/s');
    });

    it('should print exact gigs', () => {
        assert.equal(prettyb(1024 * 1024 * 1024), '1 Gb/s');
    });
    
    it('should print teras', () => {
        assert.equal(prettyb(1234567890123), '1.1 Tb/s');
    });

    it('should print exact teras', () => {
        assert.equal(prettyb(1024 * 1024 * 1024 * 1024), '1 Tb/s');
    });
    
    it('should print petas', () => {
        assert.equal(prettyb(1234567890123456), '1.1 Pb/s');
    });
    
    it('should print exact petas', () => {
        assert.equal(prettyb(1024 * 1024 * 1024 * 1024 * 1024), '1 Pb/s');
    });
    
    it('should print exabyte', () => {
        assert.equal(prettyb(1234567890123456789), '1.1 Eb/s');
    });
    
    it('should print exact exobyte', () => {
        assert.equal(prettyb(1024 * 1024 * 1024 * 1024 * 1024 * 1024), '1 Eb/s');
    });

    it('should print zero bytes', () => {
        assert.equal(prettyb(0), '0 b/s');
    });

    it('should print zero bytes with no space', () => {
        assert.equal(prettyb(0, true), '0b/s');
    });

    it('should print zero bytes with no space [opts]', () => {
        assert.equal(prettyb(0, {short: true}), '0b/s');
    });

    it('should print zero bytes with no space and one char', () => {
        assert.equal(prettyb(0, true, true), '0b');
    });

    it('should print zero bytes with no space and one char [opts]', () => {
        assert.equal(prettyb(0, {short: true, unitOnly: true}), '0b');
    });

    it('should print zero bytes with space and one char', () => {
        assert.equal(prettyb(0, false, true), '0 b');
    });

    it('should print zero bytes with space and one char [opts]', () => {
        assert.equal(prettyb(0, {unitOnly: true}), '0 b');
    });

    it('should print, two decimal places', () => {
        assert.equal(prettyb(123456789, false, false, 2), '117.74 Mb/s');
    });

    it('should print, two decimal places [opts]', () => {
        assert.equal(prettyb(123456789, {precision: 2}), '117.74 Mb/s');
    });

    it('should print three decimal places', () => {
        assert.equal(prettyb(123456789, false, false, 3), '117.738 Mb/s');
    });

    it('should print three decimal places [opts]', () => {
        assert.equal(prettyb(123456789, {precision: 3}), '117.738 Mb/s');
    });

    it('should print three decimal places no space [opts]', () => {
        assert.equal(prettyb(123456789, {short: true, precision: 3}), '117.738Mb/s');
    });

    it('should print megabytes with no space and one char', () => {
        assert.equal(prettyb(123456789, true, true), '117.7M');
    });

    it('should print kilobytes with no space and one char', () => {
        assert.equal(prettyb(12345, true, true), '12.1k');
    });

});
