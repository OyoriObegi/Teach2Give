import { aiService } from '../ai.service';
import { ApiResponse } from '../../types/apiResponse';

jest.mock('openai', () => ({
  OpenAI: jest.fn().mockImplementation(() => ({
    chat: {
      completions: {
        create: jest.fn().mockResolvedValue({
          choices: [{ message: { content: 'Test response' } }]
        })
      }
    }
  }))
}));

describe('AI Service', () => {
  describe('analyzeApplication', () => {
    it('should analyze application successfully', async () => {
      const result = await aiService.analyzeApplication('Test cover letter', 'Test job description');
      expect(result).toBeDefined();
      expect(result.status).toBe('success');
      expect(result.data).toBeDefined();
    });

    it('should handle errors', async () => {
      jest.spyOn(aiService as any, 'getAIResponse').mockRejectedValueOnce(new Error('Test error'));
      const result = await aiService.analyzeApplication('', '');
      expect(result.status).toBe('error');
      expect(result.message).toBeDefined();
    });
  });

  describe('generateCoverLetter', () => {
    it('should generate cover letter successfully', async () => {
      const result = await aiService.generateCoverLetter('Test job description', ['Test skill']);
      expect(result).toBeDefined();
      expect(result.status).toBe('success');
      expect(result.data).toBeDefined();
    });

    it('should handle errors', async () => {
      jest.spyOn(aiService as any, 'getAIResponse').mockRejectedValueOnce(new Error('Test error'));
      const result = await aiService.generateCoverLetter('', []);
      expect(result.status).toBe('error');
      expect(result.message).toBeDefined();
    });
  });

  describe('analyzeJobSkills', () => {
    it('should analyze job skills successfully', async () => {
      const result = await aiService.analyzeJobSkills('Test job description');
      expect(result).toBeDefined();
      expect(result.status).toBe('success');
      expect(result.data).toBeDefined();
    });

    it('should handle errors', async () => {
      jest.spyOn(aiService as any, 'getAIResponse').mockRejectedValueOnce(new Error('Test error'));
      const result = await aiService.analyzeJobSkills('');
      expect(result.status).toBe('error');
      expect(result.message).toBeDefined();
    });
  });
}); 