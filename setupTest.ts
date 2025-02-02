import '@testing-library/jest-dom'

import { beforeEach, vi } from 'vitest'

// Mock a match.Media
beforeEach(() => {
    const matchMediaMock = vi.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn()
    }));

    const computedStyleMock = vi.fn().mockImplementation(() => ({
        getPropertyValue: () => '',
    }));

    vi.stubGlobal('matchMedia', matchMediaMock);
    vi.stubGlobal('getComputedStyle', computedStyleMock);
});
