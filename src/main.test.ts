function add(x: number, y: number): number {
    return x+y
}


describe("테스트 설명", () => {
    it('rename', () => {
        expect(add(1, 2)).toBe(3);
    });
    it('rename2', () => {
        expect(add(1, 2)).toBe(3);
    });
    it('rename3', () => {
        expect(add(1, 2)).toBeGreaterThan(2);
        expect(add(1, 2)).toBeGreaterThan(1);
    });
});

