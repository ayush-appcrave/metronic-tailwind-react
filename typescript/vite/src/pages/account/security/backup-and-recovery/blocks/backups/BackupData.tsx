interface IBackupData {
  when: {
    duration: string;
    datetime: string;
  };
  details: {
    title: string;
    pages: string;  
    media: string;
  };
}

const BackupData: IBackupData[] = [
	{
    when: {
        duration: '7 minutes ago',
        datetime: '24 Jan, 2024, 9:24:53 AM'
    },
    details: {
        title: 'Routine Quick Backup',
        pages: '47',
        media: '235'
    }
  },
  {
      when: {
          duration: 'Today',
          datetime: '24 Jan, 2024, 2:09:26 AM'
      },
      details: {
          title: 'Early Morning Sync',
          pages: '12',
          media: '120'
      }
  },
  {
      when: {
          duration: 'Today',
          datetime: '24 Jan, 2024, 2:09:26 AM'
      },
      details: {
          title: 'Early Morning Sync',
          pages: '12',
          media: '120'
      }
  },
  {
      when: {
          duration: 'Today',
          datetime: '23 Jan, 2024, 9:24:53 AM'
      },
      details: {
          title: 'End of Day Data Archive',
          pages: '8',
          media: '109'
      }
  },
  {
      when: {
          duration: 'Yesterday',
          datetime: '23 Jan, 2024, 9:24:53 AM'
      },
      details: {
          title: 'End of Day Data Archive',
          pages: '8',
          media: '109'
      }
  },
  {
      when: {
          duration: '2 days ago',
          datetime: '22 Jan, 2024, 9:24:53 AM'
      },
      details: {
          title: 'Midweek System Update',
          pages: '12',
          media: '150'
      }
  },
  {
      when: {
          duration: '3 days ago',
          datetime: '21 Jan, 2024, 9:24:53 AM'
      },
      details: {
          title: 'Weekly Full Backup',
          pages: '236',
          media: '3276'
      }
  },
  {
      when: {
          duration: '4 days ago',
          datetime: '20 Jan, 2024, 1:17:53 AM'
      },
      details: {
          title: 'Weekly Backup - Documents',
          pages: '16',
          media: '32'
      }
  },
  {
      when: {
          duration: '5 days ago',
          datetime: '19 Jan, 2024, 2:34:13 AM'
      },
      details: {
          title: 'Quick Data Backup - User Profiles',
          pages: '12',
          media: '17'
      }
  },
  {
      when: {
          duration: '6 days ago',
          datetime: '18 Jan, 2024, 9:24:53 AM'
      },
      details: {
          title: 'Weekly Data Backup - Invoices',
          pages: '5',
          media: '3'
      }
  },
  {
      when: {
          duration: '7 days ago',
          datetime: '17 Jan, 2024, 10:15:43 AM'
      },
      details: {
          title: 'System Maintenance',
          pages: '20',
          media: '50'
      }
  },
  {
      when: {
          duration: '8 days ago',
          datetime: '16 Jan, 2024, 11:05:33 AM'
      },
      details: {
          title: 'Database Optimization',
          pages: '15',
          media: '60'
      }
  },
  {
      when: {
          duration: '9 days ago',
          datetime: '15 Jan, 2024, 1:25:23 PM'
      },
      details: {
          title: 'Nightly Cleanup',
          pages: '10',
          media: '100'
      }
  },
  {
      when: {
          duration: '10 days ago',
          datetime: '14 Jan, 2024, 3:45:13 PM'
      },
      details: {
          title: 'Monthly Report Generation',
          pages: '30',
          media: '200'
      }
  } 
];

export { BackupData, type IBackupData };

