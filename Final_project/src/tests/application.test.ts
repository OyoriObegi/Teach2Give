import { Application } from '../types/application';
import { ApplicationStatus } from '../types/application';
import { db } from '../config/database';
import { applicationRepository } from '../repositories/application.repository';

describe('Application Repository', () => {
  beforeAll(async () => {
    // Run migrations and seeds
    await db.raw('SELECT 1+1 as result');
    await db('applications').truncate();
  });

  afterAll(async () => {
    // Clean up database connection
    await db.raw('SELECT 1+1 as result');
    await db.destroy();
  });

  beforeEach(async () => {
    // Clear applications table before each test
    await db('applications').truncate();
  });

  describe('createApplication', () => {
    it('should create a new application', async () => {
      const application: Partial<Application> = {
        user_id: 1,
        job_id: 1,
        cover_letter: 'Test cover letter',
        status: ApplicationStatus.PENDING
      };

      const result = await applicationRepository.createApplication(application);
      expect(result).toBeDefined();
      expect(result.user_id).toBe(application.user_id);
      expect(result.job_id).toBe(application.job_id);
      expect(result.cover_letter).toBe(application.cover_letter);
      expect(result.status).toBe(application.status);
    });
  });

  describe('getApplicationById', () => {
    it('should return an application by id', async () => {
      // Create a test application first
      const application = await db('applications').insert({
        user_id: 1,
        job_id: 1,
        cover_letter: 'Test cover letter',
        status: ApplicationStatus.PENDING
      }).returning('*');

      const result = await applicationRepository.getApplicationById(application[0].id);
      expect(result).toBeDefined();
      expect(result?.id).toBe(application[0].id);
    });

    it('should return null for non-existent application', async () => {
      const result = await applicationRepository.getApplicationById(999);
      expect(result).toBeNull();
    });
  });

  describe('getUserApplications', () => {
    it('should return applications for a user', async () => {
      // Create a test application first
      await db('applications').insert({
        user_id: 1,
        job_id: 1,
        cover_letter: 'Test cover letter',
        status: ApplicationStatus.PENDING
      });

      const applications = await applicationRepository.getUserApplications(1);
      expect(applications).toBeDefined();
      expect(applications.length).toBeGreaterThan(0);
      expect(applications[0].user_id).toBe(1);
    });
  });

  describe('getJobApplications', () => {
    it('should return applications for a job', async () => {
      // Create a test application first
      await db('applications').insert({
        user_id: 1,
        job_id: 1,
        cover_letter: 'Test cover letter',
        status: ApplicationStatus.PENDING
      });

      const applications = await applicationRepository.getJobApplications(1);
      expect(applications).toBeDefined();
      expect(applications.length).toBeGreaterThan(0);
      expect(applications[0].job_id).toBe(1);
    });
  });

  describe('updateApplication', () => {
    it('should update an application', async () => {
      // Create a test application first
      const application = await db('applications').insert({
        user_id: 1,
        job_id: 1,
        cover_letter: 'Test cover letter',
        status: ApplicationStatus.PENDING
      }).returning('*');

      const updateData: Partial<Application> = {
        status: ApplicationStatus.REVIEWED
      };

      const result = await applicationRepository.updateApplication(application[0].id, updateData);
      expect(result).toBeDefined();
      expect(result.status).toBe(ApplicationStatus.REVIEWED);
    });
  });

  describe('verifyApplicationOwnership', () => {
    it('should return true for application owner', async () => {
      // Create a test application first
      await db('applications').insert({
        user_id: 1,
        job_id: 1,
        cover_letter: 'Test cover letter',
        status: ApplicationStatus.PENDING
      });

      const isOwner = await applicationRepository.verifyApplicationOwnership(1, 1);
      expect(isOwner).toBe(true);
    });

    it('should return false for non-owner', async () => {
      const isOwner = await applicationRepository.verifyApplicationOwnership(1, 2);
      expect(isOwner).toBe(false);
    });
  });

  describe('verifyJobOwnership', () => {
    it('should return true for job owner', async () => {
      // Create a test application first
      await db('applications').insert({
        user_id: 1,
        job_id: 1,
        cover_letter: 'Test cover letter',
        status: ApplicationStatus.PENDING
      });

      const isOwner = await applicationRepository.verifyJobOwnership(1, 1);
      expect(isOwner).toBe(true);
    });

    it('should return false for non-owner', async () => {
      const isOwner = await applicationRepository.verifyJobOwnership(1, 2);
      expect(isOwner).toBe(false);
    });
  });
}); 